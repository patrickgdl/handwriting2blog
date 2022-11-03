import Image from "next/image";
import Link from "next/link";
import { Logo } from "ui";

const product = {
  imageSrc:
    "https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/original.png",
  imageSrc2:
    "https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/predicted.png",
  imageSrc3:
    "https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/html.png",
};

export default function Product() {
  return (
    <div className="h-screen bg-gray-800">
      <header className="relative bg-gray-900">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <a>
                  <span className="sr-only">Logo</span>

                  <Logo color="white" />
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Product */}
        <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {/* Handwritten image */}
          <div className="mt-2">
            <h3 className="mb-2 text-xl font-extrabold tracking-tight text-white">
              Escrita à mão
            </h3>

            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc}
                alt={""}
                layout="fill"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Predicted image */}
          <div className="mt-2">
            <h3 className="mb-2 text-xl font-extrabold tracking-tight text-white">
              Predição
            </h3>

            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc2}
                alt={""}
                layout="fill"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Product image */}
          <div className="mt-2">
            <h3 className="mb-2 text-xl font-extrabold tracking-tight text-white">
              Resultado
            </h3>

            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc3}
                alt={""}
                layout="fill"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
