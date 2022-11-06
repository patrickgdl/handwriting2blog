import Link from "next/link";
import React from "react";
import { Icons } from "ui";

export const Header = ({ published }) => {
  return (
    <div className="sticky top-2 z-10 grid grid-cols-3 bg-white py-3 px-5">
      <Link
        href="/dashboard"
        className="rounded-lg border border-transparent bg-transparent py-2 pl-3 pr-5 text-sm font-medium text-slate-900 hover:border-slate-100 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white dark:focus:ring-slate-700"
      >
        <a className="flex items-center">
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Voltar
        </a>
      </Link>

      <p className="flex items-center justify-center text-sm text-slate-500">
        {published ? "Publicado" : "Rascunho"}
      </p>

      <div className="flex items-center justify-end space-x-4">
        <button
          type="submit"
          className="flex text-slate-400 hover:text-slate-500"
        >
          <span className="pr-2"> Ajuda </span>
          <svg
            viewBox="0 0 24 24"
            height={24}
            width={24}
            aria-hidden="true"
            focusable="false"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 8.02c0 .4-.34.73-.75.73C9.5 8.75 9.5 8 9.5 8v-.01a1.4 1.4 0 0 1 0-.13l.06-.28c.05-.22.16-.5.37-.8.45-.6 1.27-1.05 2.58-1.03.95.02 1.8.41 2.32 1.07.54.67.72 1.57.37 2.46-.37.9-1.19 1.26-1.66 1.47l-.05.02c-.28.13-.4.19-.49.25v.73a.75.75 0 0 1-1.5 0V11c0-.52.25-.9.56-1.15.25-.2.57-.34.79-.43l.04-.02c.54-.24.8-.39.91-.68a.92.92 0 0 0-.13-.96c-.23-.27-.63-.5-1.18-.51-.94-.02-1.25.29-1.36.43a.72.72 0 0 0-.13.33zm1.25 7.48a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15zm1.5 0V18H19V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1z" />
          </svg>
        </button>

        <div className="flex items-center justify-end">
          <button
            type="button"
            className="flex items-center space-x-2 whitespace-nowrap rounded bg-gradient-to-br from-violet-600 via-violet-700 to-slate-600 py-2 px-4 text-center text-sm font-semibold text-white transition hover:rotate-[-0.5deg] hover:scale-105"
          >
            <span>Salvar</span>

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
        </div>
      </div>
    </div>
  );
};
