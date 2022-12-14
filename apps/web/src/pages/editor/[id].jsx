import { withPageAuth } from "@supabase/auth-helpers-nextjs";

import {
  Editor as EditorContent,
  Footer,
  Sidebar,
} from "../../components/editor";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function Editor() {
  const post = {
    id: "1",
    title: "Postagem sem título",
    content: "This is the content",
    published: false,
  };

  if (!post) {
    <>Not Found</>;
  }

  return (
    <div className="relative grid xl:grid-cols-[20%,1fr]">
      <Sidebar />

      <div id="transcript" className="bg-white">
        <EditorContent
          post={{
            id: post.id,
            title: post.title,
            content: post.content,
            published: post.published,
          }}
        />
      </div>

      <Footer />
    </div>
  );
}
