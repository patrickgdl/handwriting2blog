import * as React from "react";
import { useRouter } from "next/router";

import { cn } from "utils";
import toast from "react-hot-toast";

async function createPost() {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Untitled Post",
    }),
  });

  if (!response?.ok) {
    toast.error("Sua postagem não foi criada. Por favor, tente novamente.");
  }

  return await response.json();
}

export function PostCreateButton({ className, ...props }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  async function onClick() {
    setIsLoading(!isLoading);

    // const post = await createPost();

    router.push(`/editor/${1}`);
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-brand-500 hover:bg-brand-400 focus:ring-brand-500 relative inline-flex h-9 items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="mr-2 h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="mr-2 h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      )}
      Nova Postagem
    </button>
  );
}
