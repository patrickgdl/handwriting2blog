import React from "react";
import { Logo } from "ui";

const titles = [
  { label: "Why google has a monorepo", isSubtitle: false },
  { label: "Sponsored by turborebo", isSubtitle: false },
  { label: "Benefits of a Monorepo", isSubtitle: true, active: true },
  { label: "Nx vs turborepo", isSubtitle: false },
  { label: "NX and Vercel: A Comparison", isSubtitle: false },
  { label: "Build your first monorepo", isSubtitle: false },
  { label: "Building and Deploying an Application", isSubtitle: false },
  { label: "The Pros and Con of Monorepos", isSubtitle: false },
];

export const Sidebar = () => {
  return (
    <div className="hidden bg-slate-900 pl-20 pr-14 xl:block">
      <div className="sticky top-0 z-20 h-screen py-10">
        <Logo color="white" />

        <div className="my-5">
          <div className="mt-14 flex items-center space-x-3 text-slate-400">
            <h3 className="text-lg tracking-wide">Sumário</h3>
          </div>

          <nav className="space-y-3 py-7">
            {titles.map(({ label, isSubtitle, active }) => (
              <button
                className={`${isSubtitle ? "translate-x-5" : ""} ${
                  active ? "font-bold" : ""
                } outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300`}
                id="o0"
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
