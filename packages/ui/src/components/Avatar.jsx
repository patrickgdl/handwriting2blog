import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "utils";

export function Avatar({ className, ...props }) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-slate-100",
        className
      )}
      {...props}
    />
  );
}

Avatar.Image = function AvatarImage({ className, ...props }) {
  return <AvatarPrimitive.Image className={cn("", className)} {...props} />;
};

Avatar.Fallback = function AvatarFallback({ className, children, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      delayMs={500}
      className={cn("", className)}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
};
