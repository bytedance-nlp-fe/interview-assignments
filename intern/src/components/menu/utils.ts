export const ID_PREFIX = "my_headless_menu_";
export const DEBOUNCE = 300; // ms

export enum ActionTypes {
  OpenMenu,
  CloseMenu,
  GoToItem,
  IncreaseHoverCount,
  DecreaseHoverCount,
  RegisterItem,
  UnregisterItem,
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
