import React from 'react';
import { Header, Sidebar } from './';

export function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className='relative h-screen bg-gray-50 flex overflow-hidden'>
      {/* Narrow sidebar */}
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        onCloseMenuMobile={() => setMobileMenuOpen(false)}
      />

      {/* Content area */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header openSidebar={() => setMobileMenuOpen(true)} />

        {/* Main content */}
        {children}
      </div>
    </div>
  );
}
