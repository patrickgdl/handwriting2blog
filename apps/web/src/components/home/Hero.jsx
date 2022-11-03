import React from "react";

export const Hero = () => {
  return (
    <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:px-0">
      <h1 className="font-display relative mt-12 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-center lg:text-4xl">
        <span>Transforme sua </span>
        <span className="relative inline-flex rounded text-white xl:border-4 xl:border-yellow-300/20 xl:px-5 xl:pt-6 xl:pb-5">
          <span className="absolute top-4 -right-40 hidden h-1 w-56 rounded-full bg-gradient-to-r from-yellow-300/20 via-amber-300 to-yellow-300 xl:block"></span>
          <span className="absolute bottom-3 -right-72 hidden h-1 w-80 rounded-full bg-gradient-to-r from-yellow-300/20 via-amber-300 to-yellow-300 xl:block"></span>
          <span> Escrita </span>
        </span>
        <span> em </span>
        <span className="mt-1 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent xl:mt-0 xl:inline">
          código HTML
        </span>
      </h1>

      <p className="font-display mx-auto mt-6 space-y-1 leading-relaxed tracking-wide text-slate-100 md:text-xl lg:text-center">
        <span className="flex items-center justify-center space-x-1">
          Usamos IA para transformar sua caligrafia em um site. Tire uma foto de
          qualquer pedaço de papel, caderno ou diário. É mágica!
        </span>
      </p>
    </div>
  );
};
