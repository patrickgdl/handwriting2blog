import { CircularProgressbar } from "react-circular-progressbar";

export const Button = ({ showProgress, progress, children, ...props }) => {
  return (
    <button
      {...props}
      className="flex w-full justify-center rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-indigo-600 hover:bg-gray-100 hover:text-indigo-500 disabled:opacity-25"
    >
      {children}

      {showProgress && (
        <CircularProgressbar
          styles={{
            root: { width: 24, height: 24, marginLeft: 8 },
            path: { stroke: "rgb(79 70 229)" },
          }}
          strokeWidth={10}
          value={progress}
        />
      )}
    </button>
  );
};
