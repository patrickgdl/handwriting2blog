import "../../styles/globals.css";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React from "react";

import { MyUserContextProvider } from "../components/lib/utils/useUser";

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = React.useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <MyUserContextProvider>
        <Component {...pageProps} />
      </MyUserContextProvider>
    </SessionContextProvider>
  );
}

export default MyApp;

export { reportWebVitals } from "next-axiom";
