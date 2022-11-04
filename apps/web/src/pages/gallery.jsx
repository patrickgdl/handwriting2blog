import { HeartIcon } from "@heroicons/react/24/outline";
import {
  PencilIcon,
  PlusIcon as PlusIconSolid,
  TableCellsIcon,
  QueueListIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { Layout } from "ui";

const tabs = [
  { name: "Recentes", href: "#", current: true },
  { name: "Não publicado", href: "#", current: false },
  { name: "Favoritado", href: "#", current: false },
];
const files = [
  {
    name: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/original.png",
    current: true,
  },
  // More files...
];
const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/original.png",
  information: {
    "Upload por": "Marie Culver",
    Criado: "June 8, 2020",
    "Última modificação": "June 8, 2020",
    Dimensões: "4032 x 3024",
    Resolução: "72 x 72",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
    },
    {
      id: 2,
      name: "Andrea McMillan",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gallery() {
  return (
    <Layout>
      <div className="flex flex-1 items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-1 text-2xl font-bold text-gray-900">
                Uploads
              </h1>
              <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                <button
                  type="button"
                  className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <QueueListIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use list view</span>
                </button>
                <button
                  type="button"
                  className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <TableCellsIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use grid view</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-3 sm:mt-2">
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue="Recently Viewed"
                >
                  <option>Recently Viewed</option>
                  <option>Recently Added</option>
                  <option>Favorited</option>
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center border-b border-gray-200">
                  <nav
                    className="-mb-px flex flex-1 space-x-6 xl:space-x-8"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? "page" : undefined}
                        className={classNames(
                          tab.current
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                        )}
                      >
                        {tab.name}
                      </a>
                    ))}
                  </nav>
                  <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                    <button
                      type="button"
                      className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <QueueListIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">List view</span>
                    </button>
                    <button
                      type="button"
                      className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <TableCellsIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Grid view</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" className="sr-only">
                Recentemente visto
              </h2>
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
              >
                {files.map((file) => (
                  <li key={file.name} className="relative">
                    <div
                      className={classNames(
                        file.current
                          ? "ring-2 ring-indigo-500 ring-offset-2"
                          : "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                        "group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100"
                      )}
                    >
                      <Image
                        src={file.source}
                        alt=""
                        layout="fill"
                        className={classNames(
                          file.current ? "" : "group-hover:opacity-75",
                          "pointer-events-none object-cover"
                        )}
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          Ver detalhes de {file.name}
                        </span>
                      </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">
                      {file.size}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>

        {/* Details sidebar */}
        <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
          <div className="space-y-6 pb-16">
            <div>
              <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                <Image
                  layout="fill"
                  src={currentFile.source}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    <span className="sr-only">Detalhes de </span>
                    {currentFile.name}
                  </h2>
                  <p className="text-sm font-medium text-gray-500">
                    {currentFile.size}
                  </p>
                </div>
                <button
                  type="button"
                  className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Favoritos</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Informações</h3>
              <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                {Object.keys(currentFile.information).map((key) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 text-sm font-medium"
                  >
                    <dt className="text-gray-500">{key}</dt>
                    <dd className="text-gray-900">
                      {currentFile.information[key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Descrição</h3>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm italic text-gray-500">
                  Adicione uma descrição.
                </p>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Add descrição</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Compartilhado com</h3>
              <ul
                role="list"
                className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {currentFile.sharedWith.map((person) => (
                  <li
                    key={person.id}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center">
                      <Image
                        src={person.imageUrl}
                        alt=""
                        className="rounded-full"
                        width={32}
                        height={32}
                      />
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remover<span className="sr-only"> {person.name}</span>
                    </button>
                  </li>
                ))}
                <li className="flex items-center justify-between py-2">
                  <button
                    type="button"
                    className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="flex items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                      Compartilhar
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex">
              <button
                type="button"
                className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Download
              </button>
              <button
                type="button"
                className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Deletar
              </button>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
