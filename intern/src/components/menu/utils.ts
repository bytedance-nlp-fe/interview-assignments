import React from "react";

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

export function syncDivRef(ref: React.MutableRefObject<HTMLElement | null>) {
  return (value: HTMLDivElement) => {
    ref.current = value;
  };
}

export function syncButtonRef(ref: React.MutableRefObject<HTMLElement | null>) {
  return (value: HTMLButtonElement) => {
    ref.current = value;
  };
}
