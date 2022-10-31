import React from 'react';

export const Overlay = () => {
  return (
    <React.Fragment>
      {/* Decorative image and overlay */}
      <div
        aria-hidden='true'
        className='absolute inset-0 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 saturate-150'
        // style={{
        //   background:
        //     'radial-gradient(ellipse 80% 100% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
        // }}
      />
    </React.Fragment>
  );
};
