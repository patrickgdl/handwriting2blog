import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Alert, DropdownMenu } from "ui";
import toast from "react-hot-toast";

async function deletePost(postId) {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (!response?.ok) {
    toast.error("Sua postagem não foi criada. Por favor, tente novamente.");
  }

  return true;
}

export function PostOperations({ post }) {
  const router = useRouter();
  const [showDeleteAlert, setShowDeleteAlert] = React.useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenu.Trigger className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-slate-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <Link href={`/editor/${post.id}`} className="flex w-full">
                Editar
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item
              className="flex cursor-pointer items-center text-red-600 focus:bg-red-50"
              onSelect={() => setShowDeleteAlert(true)}
            >
              Deletar
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu>
      <Alert open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <Alert.Content>
          <Alert.Header>
            <Alert.Title>
              Tem certeza de que deseja excluir esta postagem?
            </Alert.Title>
            <Alert.Description>
              Essa ação não pode ser desfeita.
            </Alert.Description>
          </Alert.Header>
          <Alert.Footer>
            <Alert.Cancel>Cancelar</Alert.Cancel>
            <Alert.Action
              onClick={async (event) => {
                event.preventDefault();
                setIsDeleteLoading(true);

                const deleted = await deletePost(post.id);

                if (deleted) {
                  setIsDeleteLoading(false);
                  setShowDeleteAlert(false);
                  router.refresh();
                }
              }}
              className="bg-red-600 focus:ring-red-600"
            >
              {isDeleteLoading ? (
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
              <span>Deletar</span>
            </Alert.Action>
          </Alert.Footer>
        </Alert.Content>
      </Alert>
    </>
  );
}
