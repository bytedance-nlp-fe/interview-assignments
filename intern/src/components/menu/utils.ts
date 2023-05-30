import React from "react";

export const ID_PREFIX = "my_headless_menu_";
export const DEBOUNCE = 300; // ms

export enum ActionTypes {
  OpenMenu,
  CloseMenu,
  GoToItem,
  IncreaseHoverCount,
  DecreaseHoverCount,
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
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  Home = "Home",
  End = "End",
  PageUp = "PageUp",
  PageDown = "PageDown",
  Tab = "Tab",
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
