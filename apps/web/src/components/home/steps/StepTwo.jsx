import React from "react";

export const StepTwo = () => {
  return (
    <div className="mt-32 lg:mt-44">
      <div className="relative mx-auto max-w-6xl space-y-12 px-8 lg:flex lg:space-y-0 lg:space-x-24 xl:px-0">
        <div className="relative z-30 flex w-full max-w-xl flex-col lg:w-2/5 lg:items-end lg:justify-start lg:text-right">
          <div className="relative h-24 w-40 rounded bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 ring-2 ring-blue-500 ring-offset-2 saturate-150">
            <div className="flex h-full w-full translate-x-1 items-center justify-center text-7xl  text-yellow-300">
              2
            </div>
            <div className="absolute left-5 -bottom-8 mx-auto flex max-w-sm items-center space-x-1">
              <div className="h-12 w-[3px] rounded-full bg-blue-500"></div>
              <div className="h-16 w-[3px] rounded-full bg-blue-500"></div>
              <div className="h-12 w-[3px] rounded-full bg-blue-500"></div>
            </div>
          </div>
          <h2 className="mt-12 bg-gradient-to-br from-slate-900 to-violet-700 bg-clip-text text-4xl tracking-tight text-transparent sm:text-5xl sm:leading-none">
            Foto
          </h2>
          <p className="mt-5 text-base text-slate-700 md:text-lg">
            Tire uma foto da sua página. Nossa IA irá convertê-la em uma página
            do site.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center lg:w-3/5">
          <div className="relative h-40 rounded bg-gradient-to-br bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 shadow-2xl shadow-violet-400/80 ring-2 ring-violet-500 ring-offset-2 saturate-150">
            <img
              src="/taking-picture.png"
              className="h-full rounded object-cover"
            />
            <div className="absolute inset-x-0 -bottom-16 mx-auto flex items-center justify-center space-x-2">
              <div
                className="h-20 w-1 animate-pulse rounded-full bg-red-500"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="h-24 w-1 animate-pulse rounded-full bg-green-500"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="h-20 w-1 animate-pulse rounded-full bg-yellow-500"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
