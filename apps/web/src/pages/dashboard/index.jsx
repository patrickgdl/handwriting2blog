import { withPageAuth } from "@supabase/auth-helpers-nextjs";

import {
  DashboardHeader,
  DashboardShell,
  EmptyPlaceholder,
  PostCreateButton,
  PostItem,
} from "../../components/dashboard";
import DashboardLayout from "../../components/layout/Dashboard";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function Dashboard() {
  const posts = [];

  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader heading="Postagens" text="Crie e gerencie posts.">
          <PostCreateButton />
        </DashboardHeader>

        <div>
          {posts?.length ? (
            <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
              {posts.map((post) => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="post" />
              <EmptyPlaceholder.Title>
                Nenhuma postagem criada
              </EmptyPlaceholder.Title>

              <EmptyPlaceholder.Description>
                Você ainda não tem postagens. Comece a criar conteúdo.
              </EmptyPlaceholder.Description>

              <PostCreateButton className="text-brand-900 border-slate-200 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2" />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </DashboardLayout>
  );
}
