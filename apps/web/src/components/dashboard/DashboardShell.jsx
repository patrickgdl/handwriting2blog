import * as React from "react";
import { cn } from "utils";

export function DashboardShell({ children, className, ...props }) {
  return (
    <div className={cn("grid items-start gap-8", className)} {...props}>
      {children}
    </div>
  );
}
