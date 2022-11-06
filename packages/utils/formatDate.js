export function formatDate(input) {
  const date = new Date(input);

  return date.toLocaleDateString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
