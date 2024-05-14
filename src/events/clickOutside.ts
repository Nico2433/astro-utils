export const checkClickOutside = (ev: MouseEvent, element: HTMLElement) => {
  if (ev.target && !element.contains(ev.target as Node)) return true;
  return false;
};
