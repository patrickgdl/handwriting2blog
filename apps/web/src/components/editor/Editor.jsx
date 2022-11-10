import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import * as React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";
import { Header } from "../../components/editor";

import { postPatchSchema } from "../lib/validations";

export function Editor({ post }) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(postPatchSchema),
  });
  const ref = React.useRef();
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  async function initializeEditor() {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;

    const body = postPatchSchema.parse(post);

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Escreva aqui para criar sua postagem...",
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = null;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  async function onSubmit(data) {
    setIsSaving(true);

    const blocks = await ref.current.save();

    console.log({ blocks });

    // const response = await fetch(`/api/posts/${post.id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     title: data.title,
    //     content: blocks,
    //   }),
    // });

    setIsSaving(false);

    if (!response?.ok) {
      return toast.error(
        "Sua postagem não foi salva. Por favor, tente novamente."
      );
    }

    router.refresh();

    return toast.success("Sua postagem foi salva.");
  }

  if (!isMounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <Header published={post.published} />

        <div className="prose prose-stone mx-auto w-[800px]">
          <TextareaAutosize
            autoFocus
            name="title"
            id="title"
            defaultValue={post.title}
            placeholder="Título do Post"
            className="w-full resize-none appearance-none overflow-hidden border-none p-0 text-5xl font-bold focus:outline-none"
            {...register("title")}
          />
          <div id="editor" className="min-h-[500px]" />
        </div>
      </div>
    </form>
  );
}
