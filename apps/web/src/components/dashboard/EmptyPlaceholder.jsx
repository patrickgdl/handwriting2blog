import * as React from "react";

import { cn } from "utils";
import { Icons } from "ui";

export function EmptyPlaceholder({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "animate-in fade-in-50 flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({
  name,
  className,
  ...props
}) {
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
      <Icon className={cn("h-10 w-10", className)} {...props} />
    </div>
  );
};

EmptyPlaceholder.Title = function EmptyPlaceholderTitle({
  className,
  ...props
}) {
  return (
    <h2 className={cn("mt-6 text-xl font-semibold", className)} {...props} />
  );
};

EmptyPlaceholder.Description = function EmptyPlaceholderDescription({
  className,
  ...props
}) {
  return (
    <p
      className={cn(
        "mt-3 mb-8 text-center text-sm font-normal leading-6 text-slate-700",
        className
      )}
      {...props}
    />
  );
};
