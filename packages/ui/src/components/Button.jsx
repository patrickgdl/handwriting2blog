import { CircularProgressbar } from "react-circular-progressbar";

export const Button = ({ showProgress, progress, children, ...props }) => {
  return (
    <button
      {...props}
      className="flex w-full items-center justify-center space-x-2 whitespace-nowrap rounded bg-gradient-to-br from-violet-600 via-violet-700 to-slate-600 py-2 px-4 text-center text-sm font-semibold text-white transition hover:rotate-[-0.5deg] hover:scale-105 disabled:opacity-25"
    >
      {children}

      {showProgress && (
        <CircularProgressbar
          styles={{
            root: { width: 24, height: 24, marginLeft: 8 },
            path: { stroke: "#fff" },
          }}
          strokeWidth={10}
          value={progress}
        />
      )}
    </button>
  );
};
