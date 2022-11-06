import React from "react";
import { Logo } from "ui";
import { DashboardNav, UserAccountNav } from "../dashboard";

const Dashboard = ({ children }) => {
  return (
    <div className="mx-auto flex h-screen max-w-[1440px] flex-col space-y-6 overflow-hidden px-6">
      <header className="flex h-[64px] items-center justify-between pl-2">
        <div className="flex items-center space-x-2">
          <Logo />
          {/* <span className="text-lg font-bold">Nome do Projeto</span> */}
        </div>
        <UserAccountNav
          user={{
            name: "Patrick",
            image: "/avatar.jpg",
            email: "patrickgdlima@gmail.com",
          }}
        />
      </header>
      <div className="grid grid-cols-[200px_1fr] gap-12">
        <aside className="flex w-[200px] flex-col">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
