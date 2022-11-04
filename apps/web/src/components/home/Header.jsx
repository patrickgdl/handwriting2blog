import { LogoGradient } from "ui";

export const Header = () => {
  return (
    <header className="relative z-10">
      <nav aria-label="Top">
        <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="#">
                    <span className="sr-only">Logo</span>

                    <LogoGradient />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Logo</span>

                  <LogoGradient />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
