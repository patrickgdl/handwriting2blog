import React from "react";
import {
  ArrowDownOnSquareStackIcon,
  SignalIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Alcance",
    description: "Alcance mais pessoas a partir da sua página.",
    icon: SignalIcon,
  },
  {
    name: "Compartilhamento",
    description: "Outra forma de salvar e compartilhar seu conteúdo.",
    icon: ShareIcon,
  },
  {
    name: "Reprodução",
    description: "Você já fez o trabalho. Reutilize seu conteúdo.",
    icon: ArrowDownOnSquareStackIcon,
  },
];

export const Why = () => {
  return (
    <div className="mx-auto grid max-w-5xl gap-x-14 gap-y-8 px-8 lg:grid-cols-2 xl:px-0">
      <div className="flex flex-col justify-center">
        <h2 className="bg-gradient-to-br from-slate-900 to-violet-500  bg-clip-text text-4xl font-bold leading-relaxed tracking-tight text-transparent ">
          Por que um blog?
        </h2>
        <p className="mt-4 text-lg text-slate-700 lg:max-w-lg">
          Escreva mais regularmente com menos distrações. Nossa IA avançada pode
          lidar até com a caligrafia mais desalinhada.
        </p>
      </div>

      {features.map((feature) => (
        <div key={feature.name} className="pt-6">
          <div className="flow-root rounded-lg bg-gradient-to-br from-slate-900 to-violet-700 px-6 pb-8 saturate-150">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center rounded-md border bg-white p-3 shadow-lg">
                  <feature.icon
                    className="h-6 w-6 text-slate-900"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
                {feature.name}
              </h3>
              <p className="mt-5 text-base text-white">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
