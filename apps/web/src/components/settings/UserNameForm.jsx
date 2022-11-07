import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "utils";
import { userNameSchema } from "../lib/validations";
import { Card } from "ui";
import toast from "react-hot-toast";

export function UserNameForm({ user, className, ...props }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      name: user.name,
    },
  });
  const [isSaving, setIsSaving] = React.useState(false);

  async function onSubmit(data) {
    setIsSaving(true);

    const response = await fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
      }),
    });

    setIsSaving(false);

    if (!response?.ok) {
      return toast.error(
        "Seu nome não foi atualizado. Por favor, tente novamente."
      );
    }

    toast.success("Seu nome foi atualizado.");

    // router.refresh();
  }

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Card>
        <Card.Header>
          <Card.Title>Seu nome</Card.Title>
          <Card.Description>
            Digite seu nome completo ou um nome de exibição que você se sinta
            confortável com.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              className="my-0 mb-2 block h-9 w-[350px] rounded-md border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
              size={32}
              name="name"
              {...register("name")}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
        </Card.Content>
        <Card.Footer>
          <button
            type="submit"
            className={cn(
              "bg-brand-500 hover:bg-brand-400 focus:ring-brand-500 relative inline-flex h-9 items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
              {
                "cursor-not-allowed opacity-60": isSaving,
              },
              className
            )}
            disabled={isSaving}
          >
            {isSaving && (
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
            )}
            <span>Salvar</span>
          </button>
        </Card.Footer>
      </Card>
    </form>
  );
}
