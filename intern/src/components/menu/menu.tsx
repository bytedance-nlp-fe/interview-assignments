/**
 * Apparently, the original gif is from Radix UI.
 * I've used it before but always found the source code hard to understand.
 * So I switched to Headless UI by Tailwind Labs, hoping I could borrow some
 * ideas from them. However, it still confused me a lot so
 * this is just an extremely limited cheap imitation.
 */

// TODO: ARIA labels

import React from "react";
import { Actions, ButtonProps, ItemProps, ItemsProps, MenuProps, StateContext } from "./types.ts";
import { ActionTypes, Focus, ID_PREFIX, Keys, MenuStates, syncButtonRef, syncDivRef } from "./utils.ts";
import { reducers } from "./reducers.ts";
import { useId } from "../../hooks/useId.ts";

const MenuContext = React.createContext<[StateContext, React.Dispatch<Actions>] | null>(null);

// MenuRoot is for providing an open/close state
function MenuRoot({ isOpened = false, ...props }: MenuProps) {
  function reducer(state: StateContext, action: Actions) {
    return reducers[action.type](state, action as any);
  }

  const defaultState: StateContext = {
    activeItemIndex: null,
    menuState: isOpened ? MenuStates.Open : MenuStates.Closed,
    items: [],
    itemsRef: React.createRef(),
    hoverCount: 0
  };
  const stateAndReducer = React.useReducer(reducer, defaultState);
  return <MenuContext.Provider value={stateAndReducer}>
    {props.children}
  </MenuContext.Provider>;
}

// Button can either be triggered by clicking or hovering
function Button(props: ButtonProps) {
  const [state, dispatch] = React.useContext(MenuContext) as [StateContext, React.Dispatch<Actions>];
  const id = ID_PREFIX + useId();

  function handleKeyDown(evt: React.KeyboardEvent) {
    switch (evt.key) {
      case Keys.Space:
      case Keys.Enter:
      case Keys.ArrowDown:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.OpenMenu });
        break;
      case Keys.ArrowUp:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.OpenMenu });
        break;
      case Keys.Escape:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.CloseMenu });
        break;
      default:
        break;
    }
  }

  const handleClick = (evt: React.MouseEvent) => {
    if (state.menuState === MenuStates.Open) {
      evt.preventDefault();
      evt.stopPropagation();
      dispatch({ type: ActionTypes.CloseMenu });
    } else {
      evt.preventDefault();
      evt.stopPropagation();
      dispatch({ type: ActionTypes.OpenMenu });
    }
  };

  function handleFocus(evt: React.FocusEvent) {
    if (state.menuState === MenuStates.Closed) {
      evt.preventDefault();
      dispatch({ type: ActionTypes.OpenMenu });
    }
  }

  return <button id={id}
                 className={props.className}
                 ref={syncButtonRef(state.itemsRef)}
                 aria-haspopup={"menu"}
                 aria-controls={state.itemsRef.current?.id}
                 aria-expanded={state.menuState === MenuStates.Open}
                 onKeyDown={handleKeyDown}
                 onFocus={handleFocus}
                 onClick={handleClick}>
    {props.children}
  </button>;
}

function Hover(props: ButtonProps) {
  const [state, dispatch] = React.useContext(MenuContext) as [StateContext, React.Dispatch<Actions>];
  const id = ID_PREFIX + useId();

  function handleMouseEnter(evt: React.MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch({ type: ActionTypes.IncreaseHoverCount });
  }

  function handleMouseLeave(evt: React.MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch({ type: ActionTypes.DecreaseHoverCount });
  }

  function handleFocus(evt: React.FocusEvent) {
    if (state.menuState === MenuStates.Closed) {
      evt.preventDefault();
      dispatch({ type: ActionTypes.OpenMenu });
    }
  }

  return <div id={id}
              className={props.className}
              ref={syncDivRef(state.itemsRef)}
              aria-haspopup={"menu"}
              aria-controls={state.itemsRef.current?.id}
              aria-expanded={state.menuState === MenuStates.Open}
              onFocus={handleFocus}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
    {props.children}
  </div>;
}

function Items(props: ItemsProps) {
  const [state, dispatch] = React.useContext(MenuContext) as [StateContext, React.Dispatch<Actions>];

  // control focus
  React.useEffect(() => {
    const currentRef = state.itemsRef.current;
    if (!currentRef) return;
    if (state.menuState !== MenuStates.Open) return;
    currentRef.focus({ preventScroll: true });
  }, [state.menuState, state.itemsRef]);

  const [display, setDisplay] = React.useState("");

  React.useEffect(() => {
    if (state.menuState === MenuStates.Closed) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }, [state.menuState]);

  function handleKeyDown(evt: React.KeyboardEvent) {
    switch (evt.key) {
      case Keys.Enter:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.CloseMenu });
        if (state.activeItemIndex !== null) {
          state.itemsRef.current?.click();
        }
        break;
      case Keys.ArrowDown:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Next });
        break;
      case Keys.ArrowUp:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Previous });
        break;
      case Keys.Home:
      case Keys.PageUp:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.GoToItem, focus: Focus.First });
        break;
      case Keys.End:
      case Keys.PageDown:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Last });
        break;
      case Keys.Escape:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.CloseMenu });
        break;
      case Keys.Tab:
        evt.preventDefault();
        evt.stopPropagation();
        dispatch({ type: ActionTypes.CloseMenu });
        break;
      default:
        break;
    }
  }

  let handleMouseEnter = undefined;
  let handleMouseLeave = undefined;

  if (props.isHover) {
    handleMouseEnter = (evt: React.MouseEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      dispatch({ type: ActionTypes.IncreaseHoverCount });
    };
    handleMouseLeave = (evt: React.MouseEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      dispatch({ type: ActionTypes.DecreaseHoverCount });
    };
  }

  return <div id={ID_PREFIX + useId()}
              className={props.className}
              ref={syncDivRef(state.itemsRef)}
              onKeyDown={handleKeyDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ display: display }}
  >
    {props.children}
  </div>;
}

function Item(props: ItemProps) {
  const [state, dispatch] = React.useContext(MenuContext) as [StateContext, React.Dispatch<Actions>];
  const id = ID_PREFIX + useId();

  function handleClick(evt: React.MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch({ type: ActionTypes.CloseMenu });
  }

  function handleFocus(evt: React.FocusEvent) {
    evt.preventDefault();
    dispatch({ type: ActionTypes.GoToItem, focus: Focus.Specific, id });
  }

  function handleMouseEnter(evt: React.MouseEvent) {
    evt.preventDefault();
    dispatch({ type: ActionTypes.GoToItem, focus: Focus.Specific, id });
  }

  function handleMouseLeave(evt: React.MouseEvent) {
    evt.preventDefault();
    dispatch({ type: ActionTypes.GoToItem, focus: Focus.Nothing });
  }

  return <div id={ID_PREFIX + useId()}
              className={props.className}
              ref={syncDivRef(state.itemsRef)}
              onFocus={handleFocus}
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
  >
    {props.children}
  </div>;
}


export const Menu = Object.assign(MenuRoot, { Button, Items, Item, Hover });
