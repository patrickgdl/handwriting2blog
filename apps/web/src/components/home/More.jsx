import React from "react";

export const More = () => {
  return (
    <div className="mt-40 mb-40">
      <div>
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2 className="bg-gradient-to-br from-slate-900 to-violet-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:leading-none lg:text-4xl">
            E o que mais?
          </h2>
          <p className="mt-4 text-lg text-slate-700 lg:max-w-lg">
            Podemos converter seus textos para mais do que apenas uma postagem
            no blog. Reutilize seu conteúdo de outras maneiras.
          </p>
        </div>

        <div className="relative mx-auto mt-8 max-w-2xl space-y-8 px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="grid grid-cols-[1fr,3fr] overflow-hidden rounded border-2 bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-200 pt-10 pl-10 saturate-150">
            <p className="pt-5 text-lg font-medium text-white">
              Integração com Medium
            </p>
            <div className="ml-10 flex h-full items-center rounded-tl-lg bg-white py-12 px-10">
              <p className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-200 bg-clip-text text-2xl font-medium text-transparent saturate-150">
                Em breve…
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr,3fr] overflow-hidden rounded border-2 bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-200 pt-10 pl-10 saturate-150">
            <p className="pt-5 text-lg font-medium text-white">Analytics</p>
            <div className="ml-10 flex h-full items-center rounded-tl-lg bg-white py-12 px-10">
              <p className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-200 bg-clip-text text-2xl font-medium text-transparent saturate-150">
                Em breve…
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr,3fr] overflow-hidden rounded border-2 bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-200 pt-10 pl-10 saturate-150">
            <p className="pt-2 text-lg font-medium text-white">
              Threads no Twitter
            </p>
            <div className="ml-10 flex h-full items-center rounded-tl-lg bg-white py-12 px-10">
              <p className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-200 bg-clip-text text-2xl font-medium text-transparent saturate-150">
                Em breve…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
