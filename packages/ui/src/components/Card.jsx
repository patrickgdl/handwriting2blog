import { cn } from "utils";

import { Skeleton } from "./Skeleton";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn("overflow-hidden rounded-lg border", className)}
      {...props}
    />
  );
}

Card.Header = function CardHeader({ className, ...props }) {
  return <div className={cn("grid gap-1 p-6", className)} {...props} />;
};

Card.Content = function CardContent({ className, ...props }) {
  return <div className={cn("px-6 pb-4", className)} {...props} />;
};

Card.Footer = function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("border-t bg-slate-50 px-6 py-4", className)}
      {...props}
    />
  );
};

Card.Title = function CardTitle({ className, ...props }) {
  return <h4 className={cn("text-lg font-medium", className)} {...props} />;
};

Card.Description = function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm text-gray-600", className)} {...props} />;
};

Card.Skeleton = function CardSeleton() {
  return (
    <Card>
      <Card.Header className="gap-2">
        <Skeleton className="h-5 w-1/5" />
        <Skeleton className="h-4 w-4/5" />
      </Card.Header>
      <Card.Content className="h-10" />
      <Card.Footer>
        <Skeleton className="h-8 w-[120px] bg-slate-200" />
      </Card.Footer>
    </Card>
  );
};
