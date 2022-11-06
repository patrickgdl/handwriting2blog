import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "utils";

export function DropdownMenu({ ...props }) {
  return <DropdownMenuPrimitive.Root {...props} />;
}

DropdownMenu.Trigger = React.forwardRef(function DropdownMenuTrigger(
  { ...props },
  ref
) {
  return <DropdownMenuPrimitive.Trigger {...props} ref={ref} />;
});

DropdownMenu.Portal = DropdownMenuPrimitive.Portal;

DropdownMenu.Content = React.forwardRef(function DropdownMenuContent(
  { className, ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Content
      ref={ref}
      align="end"
      className={cn(
        "animate-in slide-in-from-top-1 overflow-hidden rounded-md border border-slate-50 bg-white shadow-md md:w-32",
        className
      )}
      {...props}
    />
  );
});

DropdownMenu.Item = React.forwardRef(function DropdownMenuItem(
  { className, ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center py-2 px-3 text-sm text-slate-500 outline-none focus:bg-slate-50 focus:text-black",
        className
      )}
      {...props}
    />
  );
});

DropdownMenu.Separator = React.forwardRef(function DropdownMenuItem(
  { className, ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn("h-px bg-slate-200", className)}
      {...props}
    />
  );
});
