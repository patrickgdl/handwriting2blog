import axios from "axios";
import { filesize } from "filesize";
import { uniqueId } from "lodash";
import React from "react";
import toast from "react-hot-toast";
import { Button, DragAndDrop, FileList } from "ui";

export const FileUpload = () => {
  const [files, setFiles] = React.useState([]);
  const [originalFiles, setOriginalFiles] = React.useState([]);

  const updateFile = (id, newData) => {
    setFiles(
      files.map((file) => {
        return id === file.id ? { ...file, ...newData } : file;
      })
    );
  };

  const onUpload = async (e) => {
    e?.preventDefault();
    const formData = new FormData();
    formData.append("file", originalFiles[0]);

    try {
      const res = await axios.post("api/upload", formData, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          updateFile(files[0].id, {
            progress,
          });
        },
      });

      updateFile(files[0].id, {
        uploaded: true,
        url: res?.data?.message?.path,
      });
    } catch (error) {
      console.error(error);

      updateFile(files[0].id, {
        error: true,
      });

      if (error?.response?.status === 500) {
        toast.error("There was a problem with the server");
      } else {
        toast.error(
          error?.response?.data?.message ||
            "Ocorreu um erro com seu envio. Tente novamente mais tarde."
        );
      }
    }
  };

  const handleUpload = (files) => {
    if (files.length > 0) {
      const uploadedFiles = files.map((file) => ({
        file,
        id: uniqueId(),
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: null,
      }));

      setOriginalFiles(files);
      setFiles(uploadedFiles);
    }
  };

  const handleDelete = () => {
    console.log("delete");
    // setFiles([]);
  };

  return (
    <form onSubmit={(e) => onUpload(e)} encType="multipart/form-data">
      <DragAndDrop onUpload={handleUpload} />

      <FileList files={files} onDelete={handleDelete} onTryAgain={onUpload} />

      {files?.length > 0 && (
        <div className="mt-8">
          <Button
            type="submit"
            showProgress={
              !files[0]?.uploaded && !files[0]?.error && !!files[0]?.progress
            }
            progress={files[0]?.progress}
            disabled={files[0]?.progress > 0 || files[0]?.error}
          >
            Envie sua primeira foto
          </Button>
        </div>
      )}
    </form>
  );
};
