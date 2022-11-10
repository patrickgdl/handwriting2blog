import React from "react";
import { Logo } from "ui";

const titles = [
  { label: "Título Principal", isSubtitle: false },
  { label: "Título 2", isSubtitle: false },
  { label: "Teste de Subtítulo", isSubtitle: true, active: true },
  { label: "Título 3", isSubtitle: false },
];

export const Sidebar = () => {
  return (
    <div className="hidden bg-slate-900 pl-16 pr-10 xl:block">
      <div className="sticky top-0 z-20 h-screen py-10">
        <Logo color="white" />

        <div className="my-5">
          <div className="mt-14 flex items-center space-x-3 text-slate-400">
            <h3 className="text-lg tracking-wide">Sumário</h3>
          </div>

          <nav className="space-y-3 py-7">
            {titles.map(({ label, isSubtitle, active }, index) => (
              <button
                className={`${isSubtitle ? "translate-x-5" : ""} ${
                  active ? "font-bold" : ""
                } outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300`}
                key={`${label}-${index}`}
                title={label}
              >
                <span className="block truncate group-hover:text-yellow-300">
                  <span>{label}</span>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
