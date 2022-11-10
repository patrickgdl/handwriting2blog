import * as TabsPrimitive from "@radix-ui/react-tabs";
import clsx from "clsx";
import React from "react";

export const Tabs = ({ children }) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">{children}</TabsPrimitive.Root>
  );
};

export const TabsList = ({ children }) => {
  return (
    <TabsPrimitive.List className={clsx("flex w-full rounded-t-lg bg-white")}>
      {children}
    </TabsPrimitive.List>
  );
};

export const TabsTrigger = ({ children, value = 0 }) => {
  return (
    <TabsPrimitive.Trigger
      key={`tab-trigger-${value}`}
      value={value}
      className={clsx(
        "group",
        "first:rounded-tl-lg last:rounded-tr-lg",
        "border-b first:border-r last:border-l",
        "border-gray-300",
        "radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50:border-b-gray-100:bg-gray-900 focus-visible:border-b-transparent:bg-gray-800",
        "flex-1 px-3 py-2.5",
        "focus:radix-state-active:border-b-red",
        "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      <span className={clsx("text-sm font-medium", "text-gray-700")}>
        {children}
      </span>
    </TabsPrimitive.Trigger>
  );
};

export const TabsContent = ({ children, value }) => {
  return (
    <TabsPrimitive.Content
      key={`tab-content-${value}`}
      value={value}
      className={clsx("rounded-b-lg bg-white px-6 py-4")}
    >
      <span className="text-sm text-gray-700">{children}</span>
    </TabsPrimitive.Content>
  );
};
