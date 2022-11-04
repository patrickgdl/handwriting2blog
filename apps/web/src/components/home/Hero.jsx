import React from "react";

export const Hero = () => {
  return (
    <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:px-0">
      <h1 className="relative mt-12 text-3xl font-extrabold leading-tight tracking-tight text-slate-800 md:text-5xl lg:text-center lg:text-4xl">
        <span>Crie um </span>
        <span className="relative inline-flex md:border-b-4 md:border-yellow-300/40 md:pb-2 ">
          <span> blog </span>
        </span>
        <span> com </span>
        <span className="mt-1 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent xl:mt-0 xl:inline">
          caneta e papel
        </span>
      </h1>

      <p className="mx-auto mt-6 space-y-1 leading-relaxed tracking-wide text-slate-600 md:text-xl lg:text-center">
        <span className="flex items-center justify-center space-x-1">
          Usamos IA para transformar sua caligrafia em um site. Tire uma foto de
          qualquer pedaço de papel, caderno ou diário. É mágica!
        </span>
      </p>
    </div>
  );
};
