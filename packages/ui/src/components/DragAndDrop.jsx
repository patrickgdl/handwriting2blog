import Dropzone from "react-dropzone";

const DropContainer = ({ children, isDragActive, isDragReject }) => {
  return (
    <section
      className={`my-8 cursor-pointer rounded-md bg-white p-4 ${
        (isDragActive ? "border-green-500" : null) ||
        (isDragReject ? "border-red-500" : null)
      }`}
    >
      {children}
    </section>
  );
};

const UploadMessage = ({ children, type = null }) => {
  return (
    <div
      className={`flex items-center justify-center p-4 font-medium ${
        type === "error"
          ? "text-red-500"
          : type === "success"
          ? "text-green-500"
          : "text-indigo-600"
      }`}
    >
      {children}
    </div>
  );
};

export const DragAndDrop = ({ onUpload }) => {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>Selecione ou arraste um arquivo aqui...</UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };

  return (
    <Dropzone
      maxFiles={1}
      maxSize={5 * 1024 * 1024}
      accept={{ "image/*": [".png", ".jpeg", ".jpg"] }}
      onDrop={onUpload}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer>
          <div
            className="rounded-md border-2 border-dashed border-indigo-600 px-6 pt-5 pb-6 hover:border-solid"
            {...getRootProps()}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              className="mx-auto h-10 w-10"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 10V0H5v10H2l6 6 6-6h-3zm0 0"
                fillRule="evenodd"
                fill="#6366f1"
              />
            </svg>

            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </div>
        </DropContainer>
      )}
    </Dropzone>
  );
};
