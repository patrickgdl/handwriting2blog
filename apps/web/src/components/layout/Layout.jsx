import { Footer } from "ui";

import { Navbar } from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}
