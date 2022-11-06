import * as React from "react";
import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog";
import { cn } from "utils";

export function Alert({ ...props }) {
  return <AlertDialogPrimitives.Root {...props} />;
}

Alert.Trigger = React.forwardRef(function AlertTrigger({ ...props }, ref) {
  return <AlertDialogPrimitives.Trigger {...props} ref={ref} />;
});

Alert.Portal = AlertDialogPrimitives.Portal;

Alert.Content = React.forwardRef(
  AlertDialogPrimitives.AlertDialogContentProps >
    function AlertContent({ className, ...props }, ref) {
      return (
        <Alert.Portal>
          <AlertDialogPrimitives.Overlay className="animate-in fade-in fixed inset-0 z-20 bg-black/50 opacity-100 transition-opacity">
            <div className="fixed inset-0 z-40 flex items-center justify-center">
              <AlertDialogPrimitives.Content
                ref={ref}
                className={cn(
                  "animate-in fade-in-90 zoom-in-90 fixed z-50 grid w-[95vw] max-w-md scale-100 gap-4 rounded-lg bg-white p-6 opacity-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 md:w-full",
                  className
                )}
                {...props}
              />
            </div>
          </AlertDialogPrimitives.Overlay>
        </Alert.Portal>
      );
    }
);

Alert.Header = function AlertHeader({ className, ...props }) {
  return <div className={cn("grid gap-1", className)} {...props} />;
};

Alert.Title = React.forwardRef(function AlertTitle(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPrimitives.Title
      ref={ref}
      className={cn("text-lg font-semibold text-slate-900", className)}
      {...props}
    />
  );
});

Alert.Description = React.forwardRef(function AlertDescription(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPrimitives.Description
      ref={ref}
      className={cn("text-sm text-neutral-500", className)}
      {...props}
    />
  );
});

Alert.Footer = function AlertFooter({ className, ...props }) {
  return (
    <div className={cn("flex justify-end space-x-2", className)} {...props} />
  );
};

Alert.Cancel = React.forwardRef(function AlertCancel(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPrimitives.Cancel
      ref={ref}
      className={cn(
        "text-brand-900 relative inline-flex h-9 items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
        className
      )}
      {...props}
    />
  );
});

Alert.Action = React.forwardRef(function AlertAction(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPrimitives.Action
      ref={ref}
      className={cn(
        "bg-brand-500 hover:bg-brand-400 focus:ring-brand-500 relative inline-flex h-9 items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
        className
      )}
      {...props}
    />
  );
});
