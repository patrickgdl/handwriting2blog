import { LogoGradient } from "ui";

export const Header = () => {
  return (
    <header className="relative">
      <nav
        aria-label="Top"
        className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo (lg+) */}
          <div className="lg:flex lg:flex-1 lg:items-center">
            <span className="sr-only">Logo</span>

            <LogoGradient />
          </div>
        </div>
      </nav>
    </header>
  );
};
