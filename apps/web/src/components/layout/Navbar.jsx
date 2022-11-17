import Link from "next/link";
import s from "./Navbar.module.css";

import { LogoGradient } from "ui";
import { useRouter } from "next/router";
import { useUser } from "../lib/utils/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const Navbar = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  return (
    <nav className={s.root}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="align-center relative flex flex-row justify-between py-4 md:py-4">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <LogoGradient className="h-8" />
              </a>
            </Link>

            <nav className="ml-8 hidden space-x-4 lg:block">
              <Link href="/pricing">
                <a className={s.link}>Preços</a>
              </Link>
              <Link href="/account">
                <a className={s.link}>Conta</a>
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            {user ? (
              <span
                className={s.link}
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push("/signin");
                }}
              >
                Logout
              </span>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Login</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
