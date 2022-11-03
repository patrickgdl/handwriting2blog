import React from "react";

export const Why = () => {
  return (
    <div className="mt-24 lg:mt-32">
      <div className="relative mx-auto grid max-w-5xl auto-rows-min gap-x-14 gap-y-8 px-8 lg:grid-cols-2 xl:px-0">
        <div className="flex flex-col justify-center">
          <h2 className="font-display bg-gradient-to-br from-slate-900 to-violet-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent ">
            Por que HTML?
          </h2>
          <p className="mt-4 text-lg text-slate-700 lg:max-w-lg">
            Escreva mais regularmente com menos distrações. Nossa IA avançada
            pode lidar até com a caligrafia mais desalinhada.
          </p>
        </div>

        <div className="overflow-hidden rounded border border-purple-200 bg-gradient-to-tr from-purple-900 via-violet-800 to-pink-600 pt-10">
          <div className="ml-10 flex h-full items-center justify-center rounded-tl-lg bg-white py-12 px-10">
            <p className="bg-gradient-to-tr from-purple-900 via-violet-800 to-pink-600 bg-clip-text text-2xl font-medium text-transparent">
              Alcance milhões de pessoas a partir da sua página.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded border border-blue-200 bg-gradient-to-tr from-blue-900 via-violet-700 to-green-700 pt-10 xl:translate-x-20">
          <div className="mx-10 flex h-full items-center justify-center rounded-t-lg bg-white py-12 px-10">
            <p className="bg-gradient-to-r from-blue-900 via-violet-700 to-green-700 bg-clip-text text-2xl font-medium text-transparent">
              Outra forma de salvar e compartilhar seu conteúdo
            </p>
          </div>
        </div>

        <div className="rounded border border-slate-200 bg-gradient-to-br from-green-600 via-slate-600 to-violet-600 pb-3 xl:translate-x-20">
          <div className="mx-5 flex items-center justify-center rounded-b-lg bg-white py-12 px-10">
            <p className="bg-gradient-to-r from-green-600 via-slate-600 to-violet-600 bg-clip-text text-2xl font-medium text-transparent">
              Você já fez o trabalho.
              <br />
              Reutilize seu conteúdo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
