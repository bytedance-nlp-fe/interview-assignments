import React, { MutableRefObject } from "react";

export const ID_PREFIX = "my_headless_menu_";

export enum ActionTypes {
  OpenMenu,
  CloseMenu,
  GoToItem,
}

export enum MenuStates {
  Open,
  Closed,
}

export enum Focus {
  First,
  Previous,
  Next,
  Last,
  Specific,
  Nothing,
}

export enum Keys {
  Space = " ",
  Enter = "Enter",
  Escape = "Escape",
  Backspace = "Backspace",
  Delete = "Delete",

  ArrowLeft = "ArrowLeft",
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown",

  Home = "Home",
  End = "End",

  PageUp = "PageUp",
  PageDown = "PageDown",

  Tab = "Tab",
}

export enum ButtonModes {
  Click = "click",
  Hover = "hover",
}

export function syncRef(ref: React.MutableRefObject<HTMLDivElement | null>) {
  return (value: HTMLDivElement) => {
    ref.current = value;
  };
}
