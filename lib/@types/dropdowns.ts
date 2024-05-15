import type { HTMLAttributes } from "astro/types";

type DropdownPosition = "top" | "right" | "bottom" | "left";

interface Dropdown extends HTMLAttributes<"div"> {
  autoClose?: boolean;
}

export interface DropdownComponent extends Dropdown {
  position?: DropdownPosition;
  absolute?: boolean;
}

export interface DropdownMenuComponent extends Dropdown {
  blockScroll?: boolean;
}
