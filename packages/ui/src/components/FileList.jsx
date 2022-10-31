import Image from 'next/image';
import 'react-circular-progressbar/dist/styles.css';

import { ExclamationCircleIcon } from '@heroicons/react/outline';

export const FileList = ({ files, onDelete }) => {
  return (
    <div className='mt-5'>
      {files?.map((file) => (
        <li
          className='flex justify-between items-center text-slate-400 w-80 '
          key={file.id}
        >
          <div className='flex'>
            <Image
              width={36}
              height={36}
              alt='Imagem de Preview'
              className='rounded-md bg-no-repeat bg-cover bg-center mr-2'
              src={file.preview}
            />

            <div className='flex flex-col justify-start ml-2'>
              <strong className='text-sm text-gray-100'>{file.name}</strong>

              <span className='text-xs text-gray-100 mt-1 text-left'>
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
            <span className='text-white'>{file.progress}%</span>

            {/* {file.url && (
              <a href={file.url} target='_blank' rel='noopener noreferrer'>
                <LinkIcon className='mr-2 text-gray-700 w-5 h-5' />
              </a>
            )}

            {file.uploaded && (
              <CheckCircleIcon className='mr-2 text-cyan-400 w-5 h-5' />
            )} */}

            {file.error && (
              <ExclamationCircleIcon className='mr-2 text-red-500 w-5 h-5' />
            )}
          </div>
        </li>
      ))}
    </div>
  );
};
