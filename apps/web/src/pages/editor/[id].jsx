import { useRouter } from "next/router";

import { Content, Sidebar, Header } from "../../components/editor";

export default function Editor() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="relative grid xl:grid-cols-[25%,1fr]">
      <Sidebar />

      <div id="transcript" className="bg-white">
        <p>Conversão: {id}</p>

        <Header />

        <Content>
          ## Markdowon - OneNote HTML MAP## The first line (above) is the TITLE
          # This is a HEADING # * This is in bold* ! This is in italic! 1.
          Number 1 2. Number 2 3. Number 3 `{">"}` Bullet I `{">"}`Bullet 2 `
          {">"}`Bullet 3 # Heading with *! BOLD AND ITALIC !* # That`&apos;`s it
          for now!
        </Content>
      </div>
    </div>
  );
}
