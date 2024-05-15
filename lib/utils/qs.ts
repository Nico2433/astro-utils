export const qs = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector);

export const qsAll = <T extends HTMLElement>(selectors: string) =>
  document.querySelectorAll<T>(selectors);
