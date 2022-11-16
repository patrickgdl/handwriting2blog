import Link from "next/link";

import { Logo, GitHub } from "ui";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6">
      <div className="grid grid-cols-1 gap-8 border-b border-zinc-600 py-12 text-slate-800 transition-colors duration-150 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/">
            <a className="flex flex-initial items-center font-bold md:mr-24">
              <span className="mr-2">
                <Logo />
              </span>
            </a>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-slate-800 transition duration-150 ease-in-out hover:text-zinc-500">
                  Home
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-slate-800 transition duration-150 ease-in-out hover:text-zinc-500">
                  Sobre
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-slate-800 transition duration-150 ease-in-out hover:text-zinc-500">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-slate-800 transition duration-150 ease-in-out hover:text-zinc-500">
                  Política de Privacidade
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-slate-800 transition duration-150 ease-in-out hover:text-zinc-500">
                  Termos de Uso
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex items-start text-slate-800 lg:col-span-6 lg:justify-end">
          <div className="flex h-10 items-center space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/patrickgdl/handwriting2blog"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between space-y-4 py-12 md:flex-row">
        <div>
          <span>&copy; Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
