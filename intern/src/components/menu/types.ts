import React from "react";
import { ActionTypes, Focus, MenuStates } from "./utils.ts";

// Actions are for reducer
export type Actions =
  | { type: ActionTypes.CloseMenu }
  | { type: ActionTypes.OpenMenu }
  | { type: ActionTypes.GoToItem; focus: Focus.Specific; id: string; }
  | {
  type: ActionTypes.GoToItem
  focus: Exclude<Focus, Focus.Specific>
} | {
  type: ActionTypes.IncreaseHoverCount
} | {
  type: ActionTypes.DecreaseHoverCount
};

export type StateContext = {
  activeItemIndex: number | null;
  menuState: MenuStates;
  items: { id: string; }[];
  itemsRef: React.MutableRefObject<HTMLElement | null>;
  hoverCount: number;
  // hoverCloseTimeout: ReturnType<typeof setTimeout>;
}

export type MenuProps = {
  children: React.ReactNode;
  isOpened?: boolean;
}

export type ButtonProps = {
  children: React.ReactNode;
  className: string;
}

export type HoverProps = {
  children: React.ReactNode;
  className: string;
}

export type ItemsProps = {
  children: React.ReactNode;
  className: string;
  isHover: boolean; // distinguish Button items and Hover items
}

export type ItemProps = {
  children: React.ReactNode;
  className: string;
}
