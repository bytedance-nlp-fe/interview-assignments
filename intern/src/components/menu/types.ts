import React, { MutableRefObject } from "react";
import { ActionTypes, Focus, MenuStates } from "./utils.ts";

// Actions are for reducer
export type Actions =
  | { type: ActionTypes.CloseMenu }
  | { type: ActionTypes.OpenMenu }
  | { type: ActionTypes.GoToItem; focus: Focus.Specific; id: string; }
  | {
  type: ActionTypes.GoToItem
  focus: Exclude<Focus, Focus.Specific>
}

export type StateContext = {
  activeItemIndex: number | null;
  menuState: MenuStates;
  items: { id: string; }[];
  itemsRef: MutableRefObject<HTMLDivElement | null>,
}

export type MenuProps = {
  children: React.ReactNode;
  isOpened?: boolean;
}

export type ButtonProps = {
  children: React.ReactNode;
  className: string;
  mode?: string;
}

export type ItemsProps = {
  children: React.ReactNode;
  className: string;
}

export type ItemProps = {
  children: React.ReactNode;
  className: string;
}
