import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { Fragment } from "react";
import clsx from "clsx";

import { XMarkIcon } from "@heroicons/react/24/outline";

export const Dialog = ({ isOpen, onOpenChange, children }) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay
            forceMount
            className="fixed inset-0 z-20 bg-white/50"
          />
        </Transition.Child>

        {children}
      </Transition.Root>
    </DialogPrimitive.Root>
  );
};

export const DialogContent = ({ children }) => {
  return (
    <DialogPrimitive.Content
      forceMount
      className={clsx(
        "fixed z-50",
        "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
        "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
        "bg-white",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      {children}

      <DialogPrimitive.Close
        className={clsx(
          "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  );
};
