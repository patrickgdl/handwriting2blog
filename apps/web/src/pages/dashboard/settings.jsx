import { withPageAuth } from "@supabase/auth-helpers-nextjs";

import {
  DashboardHeader,
  DashboardShell,
  UserNameForm,
} from "../../components/dashboard";
import Dashboard from "../../components/layout/Dashboard";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function Settings() {
  const user = {
    id: 1,
    name: "Patrick Lima",
  };

  return (
    <Dashboard>
      <DashboardShell>
        <DashboardHeader
          heading="Configurações"
          text="Gerencie as configurações da conta e do site."
        />
        <div className="grid gap-10">
          <UserNameForm user={{ id: user.id, name: user.name }} />
        </div>
      </DashboardShell>
    </Dashboard>
  );
}
