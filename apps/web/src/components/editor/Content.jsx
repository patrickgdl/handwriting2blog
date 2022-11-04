import React from "react";

export const Content = ({ children }) => {
  return (
    <div className="pt-16 pb-28 xl:pt-24 xl:pb-36">
      <div
        contentEditable="true"
        translate="no"
        tabIndex={0}
        className="mx-auto max-w-[650px] px-8 focus:outline-none lg:pr-8 lg:pl-14"
      >
        {children}
      </div>
    </div>
  );
};
