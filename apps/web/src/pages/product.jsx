import Image from "next/image";
import Link from "next/link";
import { Logo } from "ui";

export default function Product() {
  return (
    <div className="relative grid xl:grid-cols-[25%,1fr]">
      <div className="hidden bg-slate-900 pl-20 pr-14 xl:block">
        <div className="sticky top-14 z-20">
          <Logo color="white" />

          <div className="my-5">
            <div id="outline">
              <div className="mt-14 flex items-center space-x-3 text-slate-400">
                <h3 className="text-lg tracking-wide">Outline</h3>
                <div className="h-px w-full bg-slate-800" />
                <div>
                  <button
                    type="button"
                    className="relative block -translate-y-1 transition hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      height="20px"
                      width="20px"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="StyledIconBase-sc-ea9ulj-0 bhLQRR"
                    >
                      <rect width={24} height={24} fill="none" />
                      <path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div dir="ltr">
                <div>
                  <div>
                    <div className="space-y-3 py-7">
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o0"
                        title="Why google has a monorepo"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>Why google has a monorepo</span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o35247"
                        title="Sponsored by turborebo"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>Sponsored by turborebo</span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full translate-x-5 items-center space-x-3.5 text-sm font-bold text-slate-400 transition duration-300"
                        id="o85677"
                        title="Benefits of a Monorepo"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>Benefits of a Monorepo</span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o138580"
                        title="Options for configuring workspaces in a project"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>
                            Options for configuring workspaces in a project
                          </span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o228310"
                        title="Nx vs turborepo"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>Nx vs turborepo</span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o324792"
                        title="NX and Versailles: A Comparison"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>NX and Versailles: A Comparison</span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o370092"
                        title="Build your first monorepo"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>Build your first monorepo</span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o432400"
                        title="Building and Deploying an Application"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>Building and Deploying an Application</span>
                        </span>
                      </button>
                      <button
                        className="outline-button group relative flex w-full items-center space-x-3.5 text-sm text-slate-400 transition duration-300"
                        id="o518952"
                        title="io The Pros and Con of Monorepos"
                      >
                        <span className="block truncate group-hover:text-yellow-300">
                          <span>io The Pros and Con of Monorepos</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="transcript" className="bg-white">
        <div className="sticky top-2 z-10 grid grid-cols-3 bg-white py-3 px-5">
          <div />

          <div className="flex items-center justify-center">Título</div>

          <div className="flex items-center justify-end space-x-4">
            <button className="text-slate-400 hover:text-slate-500">
              <svg
                viewBox="0 0 24 24"
                height={24}
                width={24}
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-sc-ea9ulj-0 bhLQRR"
              >
                <path d="M11 8.02c0 .4-.34.73-.75.73C9.5 8.75 9.5 8 9.5 8v-.01a1.4 1.4 0 0 1 0-.13l.06-.28c.05-.22.16-.5.37-.8.45-.6 1.27-1.05 2.58-1.03.95.02 1.8.41 2.32 1.07.54.67.72 1.57.37 2.46-.37.9-1.19 1.26-1.66 1.47l-.05.02c-.28.13-.4.19-.49.25v.73a.75.75 0 0 1-1.5 0V11c0-.52.25-.9.56-1.15.25-.2.57-.34.79-.43l.04-.02c.54-.24.8-.39.91-.68a.92.92 0 0 0-.13-.96c-.23-.27-.63-.5-1.18-.51-.94-.02-1.25.29-1.36.43a.72.72 0 0 0-.13.33zm1.25 7.48a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15zm1.5 0V18H19V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1z" />
              </svg>
            </button>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="export-button flex items-center space-x-2 whitespace-nowrap rounded bg-gradient-to-br from-violet-600 via-violet-700 to-slate-600 py-2 px-4 text-center text-sm font-semibold text-white transition hover:rotate-[-0.5deg] hover:scale-105"
              >
                <span>Export Blog Post</span>
                <svg
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  aria-hidden="true"
                  focusable="false"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="StyledIconBase-sc-ea9ulj-0 bhLQRR"
                >
                  <path d="m13.061 4.939-2.122 2.122L15.879 12l-4.94 4.939 2.122 2.122L20.121 12z" />
                  <path d="M6.061 19.061 13.121 12l-7.06-7.061-2.122 2.122L8.879 12l-4.94 4.939z" />
                </svg>
              </button>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r0:"
                data-state="closed"
              />
            </div>
          </div>
        </div>
        <div className="pt-16 pb-28 xl:pt-24 xl:pb-36">
          <div aria-expanded="false">
            <div
              contentEditable="true"
              translate="no"
              tabIndex={0}
              className="mx-auto max-w-[650px] px-8 focus:outline-none lg:pr-8 lg:pl-14"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
