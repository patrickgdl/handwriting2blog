import Image from 'next/image';
import Link from 'next/link';

const product = {
  imageSrc:
    'https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/original.png',
  imageSrc2:
    'https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/predicted.png',
  imageSrc3:
    'https://sketch2codeappda298.blob.core.windows.net/e0cc2293-15ef-4ec5-91a4-94062d2da242/html.png',
};

export default function Product() {
  return (
    <div className='bg-gray-800 h-screen'>
      <header className='relative bg-gray-900'>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='h-16 flex items-center'>
            {/* Logo */}
            <div className='ml-4 flex lg:ml-0'>
              <Link href='/'>
                <a>
                  <span className='sr-only'>Logo</span>

                  <svg
                    className='h-10 w-auto'
                    viewBox='0 0 295 231'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M265.307 150.12C252.473 185.828 212.177 197.391 174.402 197.933C137.314 198.465 97.0099 187.744 84.519 152.714C71.6385 116.591 93.6095 79.7655 123.856 56.1804C155.806 31.2676 198.328 15.3795 231.981 37.7295C267.862 61.5588 279.94 109.405 265.307 150.12Z'
                      fill='#fff'
                    />
                    <path
                      d='M69.7333 35C51.1999 38.3333 36.3999 45.9333 23.8666 58.4666C12.3999 69.8 5.99994 82.0666 2.53328 99C-0.400055 113.4 0.133278 115 7.86661 115C13.4666 115 13.9999 114.733 14.7999 111.267C19.3333 90.3333 30.3999 76.2 49.3333 67.5333C62.9333 61.2666 74.3999 58.8666 91.1999 58.8666C115.467 58.7333 136.667 65 160 79.2666C168.933 84.6 193.867 108.867 192.133 110.6C191.867 111 182.8 109.933 172.133 108.333C161.467 106.733 151.733 105.667 150.667 106.2C149.067 106.733 148.667 109.4 148.667 117.533V128.067L158.4 128.867C184.667 131.133 220 133.667 223.733 133.667H227.733L226.933 123.267C226.4 117.667 225.467 107.933 224.8 101.667C224 95.4 222.533 81.6666 221.333 71C220.133 60.3333 218.667 51.1333 218 50.4666C216.667 49.1333 200.8 50.6 198 52.3333C196.4 53.2666 196.533 56.2 199.067 71.9333C200.667 82.0666 202 91.1333 202 92.2C202 93.1333 197.733 89.2666 192.4 83.6666C181.6 72.2 165.867 59.5333 152 51.4C141.333 45 136.8 43.2666 119.333 38.3333C105.333 34.4666 81.1999 32.8666 69.7333 35Z'
                      fill='#4F46E5'
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Product */}
        <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
          {/* Handwritten image */}
          <div className='mt-2'>
            <h3 className='text-xl text-white mb-2 font-extrabold tracking-tight'>
              Escrita à mão
            </h3>

            <div className='aspect-w-1 aspect-h-1 rounded-lg overflow-hidden'>
              <Image
                src={product.imageSrc}
                alt={''}
                layout='fill'
                className='object-center object-cover'
              />
            </div>
          </div>

          {/* Predicted image */}
          <div className='mt-2'>
            <h3 className='text-xl text-white mb-2 font-extrabold tracking-tight'>
              Predição
            </h3>

            <div className='aspect-w-1 aspect-h-1 rounded-lg overflow-hidden'>
              <Image
                src={product.imageSrc2}
                alt={''}
                layout='fill'
                className='object-center object-cover'
              />
            </div>
          </div>

          {/* Product image */}
          <div className='mt-2'>
            <h3 className='text-xl text-white mb-2 font-extrabold tracking-tight'>
              Resultado
            </h3>

            <div className='aspect-w-1 aspect-h-1 rounded-lg overflow-hidden'>
              <Image
                src={product.imageSrc3}
                alt={''}
                layout='fill'
                className='object-center object-cover'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
