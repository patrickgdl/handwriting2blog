import Dropzone from 'react-dropzone';

const DropContainer = ({ children, isDragActive, isDragReject }) => {
  return (
    <section
      className={`rounded-md cursor-pointer p-4 my-8 bg-white ${
        (isDragActive ? 'border-green-500' : null) ||
        (isDragReject ? 'border-red-500' : null)
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
        type === 'error'
          ? 'text-red-500'
          : type === 'success'
          ? 'text-green-500'
          : 'text-indigo-600'
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
      return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type='success'>Solte os arquivos aqui</UploadMessage>;
  };

  return (
    <Dropzone
      maxFiles={1}
      maxSize={5 * 1024 * 1024}
      accept={{ 'image/*': ['.png', '.jpeg', '.jpg'] }}
      onDrop={onUpload}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer>
          <div {...getRootProps()}>
            <svg
              className='mx-auto h-12 w-12 text-indigo-500'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 48 48'
              aria-hidden='true'
            >
              <path
                d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
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
// export class DragAndDrop extends Component {
//   renderDragMessage = (isDragActive, isDragReject) => {
//     if (!isDragActive) {
//       return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
//     }

//     if (isDragReject) {
//       return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>;
//     }

//     return <UploadMessage type='success'>Solte os arquivos aqui</UploadMessage>;
//   };

//   render() {
//     const { onUpload } = this.props;

//     return (
//       <Dropzone
//         maxFiles={1}
//         maxSize={5 * 1024 * 1024}
//         accept={{ 'image/*': ['.png', '.jpeg', '.jpg'] }}
//         onDropAccepted={onUpload}
//       >
//         {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
//           <DropContainer
//             {...getRootProps()}
//             isDragActive={isDragActive}
//             isDragReject={isDragReject}
//           >
//             <input {...getInputProps()} />
//             {this.renderDragMessage(isDragActive, isDragReject)}
//           </DropContainer>
//         )}
//       </Dropzone>
//     );
//   }
// }
