export const eById = <T extends HTMLElement>(id: string) =>
  document.getElementById(id) as T | null;
