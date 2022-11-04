import Image from "next/image";
import "react-circular-progressbar/dist/styles.css";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export const FileList = ({ files, onDelete, onTryAgain }) => {
  return (
    <div className="mt-5">
      {files?.map((file) => (
        <li
          className="flex w-80 items-center justify-between text-slate-400 "
          key={file.id}
        >
          <div className="flex">
            <Image
              width={36}
              height={36}
              alt="Imagem de Preview"
              className="mr-2 rounded-md bg-cover bg-center bg-no-repeat"
              src={file.preview}
            />

            <div className="ml-2 flex flex-col justify-start">
              <strong className="text-sm text-gray-100">{file.name}</strong>

              <span className="mt-1 text-left text-xs text-gray-100">
                {file.readableSize}

                {/* {!!file.url && (
                  <button
                    className='border-none bg-transparent text-red-300 ml-1 cursor-pointer'
                    onClick={() => onDelete(file.id)}
                  >
                    Excluir
                  </button>
                )} */}
              </span>
            </div>
          </div>

          <div>
            {/* <span className='text-white'>{file.progress}%</span> */}

            {/* {file.url && (
              <a href={file.url} target='_blank' rel='noopener noreferrer'>
                <LinkIcon className='mr-2 text-gray-700 w-5 h-5' />
              </a>
            )}

            {file.uploaded && (
              <CheckCircleIcon className='mr-2 text-cyan-400 w-5 h-5' />
            )} */}

            {file.error && (
              <div className="flex flex-col items-center">
                <button
                  className="ml-1 cursor-pointer border-none bg-transparent text-xs text-slate-100"
                  onClick={() => onTryAgain()}
                >
                  Tentar novamente
                </button>

                <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-400" />
              </div>
            )}
          </div>
        </li>
      ))}
    </div>
  );
};
