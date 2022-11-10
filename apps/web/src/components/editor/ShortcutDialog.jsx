import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Dialog,
  DialogContent,
} from "ui";

const essentials = [
  {
    action: "Copiar",
    winCommand: ["Control", "C"],
    macCommand: ["Cmd", "C"],
  },
  {
    action: "Cortar",
    winCommand: ["Control", "X"],
    macCommand: ["Cmd", "X"],
  },
  {
    action: "Colar",
    winCommand: ["Control", "V"],
    macCommand: ["Cmd", "V"],
  },
  {
    action: "Colar sem formatar",
    winCommand: ["Control", "Shift", "V"],
    macCommand: ["Cmd", "Shift", "V"],
  },
  {
    action: "Desfazer",
    winCommand: ["Control", "Z"],
    macCommand: ["Cmd", "Z"],
  },
  {
    action: "Refazer",
    winCommand: ["Control", "Shift", "Z"],
    macCommand: ["Cmd", "Shift", "Z"],
  },
  {
    action: "Adicionar uma nova linha",
    winCommand: ["Shift", "Enter"],
    macCommand: ["Shift", "Enter"],
  },
];

const textFormatting = [
  {
    action: "Negrito",
    winCommand: ["Control", "B"],
    macCommand: ["Cmd", "B"],
  },
  {
    action: "Italico",
    winCommand: ["Control", "I"],
    macCommand: ["Cmd", "I"],
  },
  {
    action: "Underline",
    winCommand: ["Control", "U"],
    macCommand: ["Cmd", "U"],
  },
  {
    action: "Tachado",
    winCommand: ["Control", "Shift", "X"],
    macCommand: ["Cmd", "Shift", "X"],
  },
  {
    action: "Código",
    winCommand: ["Control", "E"],
    macCommand: ["Cmd", "E"],
  },
  {
    action: "Link",
    winCommand: ["Control", "K"],
    macCommand: ["Cmd", "K"],
  },
];

const paragraphFormatting = [
  {
    action: "Aplicar estilo de texto",
    winCommand: ["Control", "Alt", "0"],
    macCommand: ["Cmd", "Alt", "0"],
  },
  {
    action: "Aplicar heading estilo 2",
    winCommand: ["Control", "Alt", "2"],
    macCommand: ["Cmd", "Alt", "2"],
  },
  {
    action: "Aplicar heading estilo 3",
    winCommand: ["Control", "Alt", "3"],
    macCommand: ["Cmd", "Alt", "3"],
  },
  {
    action: "Lista ordenada",
    winCommand: ["Control", "Shift", "7"],
    macCommand: ["Cmd", "Shift", "7"],
  },
  {
    action: "Lista de Marcadores",
    winCommand: ["Control", "Shift", "8"],
    macCommand: ["Cmd", "Shift", "8"],
  },
  {
    action: "Citação",
    winCommand: ["Control", "Shift", "B"],
    macCommand: ["Cmd", "Shift", "B"],
  },
  {
    action: "Bloco de Código",
    winCommand: ["Control", "Alt", "C"],
    macCommand: ["Cmd", "Alt", "C"],
  },
];

const textSelection = [
  {
    action: "Selecionar tudo",
    winCommand: ["Control", "A"],
    macCommand: ["Cmd", "A"],
  },
  {
    action: "Estender a seleção um caractere à esquerda",
    winCommand: ["Shift", "←"],
    macCommand: ["Shift", "←"],
  },
  {
    action: "Estender a seleção um caractere à direita",
    winCommand: ["Shift", "→"],
    macCommand: ["Shift", "→"],
  },
  {
    action: "Estender a seleção uma linha acima",
    winCommand: ["Shift", "↑"],
    macCommand: ["Shift", "↑"],
  },
  {
    action: "Estender a seleção uma linha abaixo",
    winCommand: ["Shift", "↓"],
    macCommand: ["Shift", "↓"],
  },
  {
    action: "Estender a seleção para o início do documento",
    winCommand: ["Control", "Shift", "↑"],
    macCommand: ["Cmd", "Shift", "↑"],
  },
  {
    action: "Estender a seleção para o início do documento",
    winCommand: ["Control", "Shift", "↓"],
    macCommand: ["Cmd", "Shift", "↓"],
  },
];

const Tr = ({ children, ...props }) => (
  <th
    className="mb-2 flex items-center justify-between gap-4 py-2 shadow-sm"
    {...props}
  >
    {children}
  </th>
);

const Th = ({ children, ...props }) => (
  <th className="w-full text-left" scope="col" {...props}>
    {children}
  </th>
);

const Td = ({ children, ...props }) => (
  <td className="flex w-full gap-2 text-left" {...props}>
    {children}
  </td>
);

const Table = ({ children }) => (
  <table className="w-full">
    <thead>
      <Tr>
        <Th scope="col">Comando</Th>
        <Th scope="col">Windows/Linux</Th>
        <Th scope="col">macOS</Th>
      </Tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

const Kbd = ({ children }) => (
  <kbd className="rounded-sm bg-gray-100 px-2 py-1">{children}</kbd>
);

export const ShortcutsDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog isOpen={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <Tabs defaultValue="essentials">
          <TabsList aria-label="Explore shortcut types">
            <TabsTrigger value="essentials">Essenciais</TabsTrigger>
            <TabsTrigger value="text-formatting">
              Formatação de Texto
            </TabsTrigger>
            <TabsTrigger value="p-formatting">
              Formatação de Parágrafo
            </TabsTrigger>
            <TabsTrigger value="selection">Seleção de Texto</TabsTrigger>
          </TabsList>
          <TabsContent value="essentials">
            <Table>
              {essentials.map((shortcut) => (
                <Tr key={shortcut.action}>
                  <Th scope="row">{shortcut.action}</Th>
                  <Td>
                    {shortcut.winCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                  <Td>
                    {shortcut.macCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                </Tr>
              ))}
            </Table>
          </TabsContent>
          <TabsContent value="text-formatting">
            <Table>
              {textFormatting.map((shortcut) => (
                <Tr key={shortcut.action}>
                  <Th scope="row">{shortcut.action}</Th>
                  <Td>
                    {shortcut.winCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                  <Td>
                    {shortcut.macCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                </Tr>
              ))}
            </Table>
          </TabsContent>
          <TabsContent value="p-formatting">
            <Table>
              {paragraphFormatting.map((shortcut) => (
                <Tr key={shortcut.action}>
                  <Th scope="row">{shortcut.action}</Th>
                  <Td>
                    {shortcut.winCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                  <Td>
                    {shortcut.macCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                </Tr>
              ))}
            </Table>
          </TabsContent>
          <TabsContent value="selection">
            <Table>
              {textSelection.map((shortcut) => (
                <Tr key={shortcut.action}>
                  <Th scope="row">{shortcut.action}</Th>
                  <Td>
                    {shortcut.winCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                  <Td>
                    {shortcut.macCommand.map((command) => (
                      <Kbd key={command}>{command}</Kbd>
                    ))}
                  </Td>
                </Tr>
              ))}
            </Table>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
