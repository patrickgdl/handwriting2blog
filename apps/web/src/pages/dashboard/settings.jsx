import { DashboardHeader, DashboardShell } from "../../components/dashboard";
import Dashboard from "../../components/layout/Dashboard";
import { UserNameForm } from "../../components/settings";

export default function Settings() {
  return (
    <Dashboard>
      <DashboardShell>
        <DashboardHeader
          heading="Configurações"
          text="Gerencie as configurações da conta e do site."
        />
        <div className="grid gap-10">
          <UserNameForm user={{ id: "1", name: "Patrick Lima" }} />
        </div>
      </DashboardShell>
    </Dashboard>
  );
}
