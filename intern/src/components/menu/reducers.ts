import { ActionTypes, Focus, MenuStates } from "./utils.ts";
import { Actions, StateContext } from "./types.ts";

export const reducers: {
  [T in ActionTypes]: (
    state: StateContext,
    action: Extract<Actions, { type: T }>
  ) => StateContext
} = {
  [ActionTypes.CloseMenu]: (state) => {
    if (state.menuState === MenuStates.Closed) return state;
    return {
      ...state,
      activeItemIndex: null,  // no Item active when Menu closed
      menuState: MenuStates.Closed
    };
  },
  [ActionTypes.OpenMenu]: (state) => {
    // if (state.hoverCloseTimeout) clearTimeout(state.hoverCloseTimeout);
    if (state.menuState === MenuStates.Open) return state;
    return {
      ...state,
      menuState: MenuStates.Open
    };
  },
  [ActionTypes.GoToItem]: (state, action) => {
    let activeItemIndex = null;
    switch (action.focus) {
      case Focus.First:
        activeItemIndex = 0;
        break;
      case Focus.Last:
        activeItemIndex = state.items.length - 1;
        break;
      case Focus.Next:
        activeItemIndex = state.activeItemIndex ? state.activeItemIndex + 1 : 0;
        if (activeItemIndex >= state.items.length) activeItemIndex = 0;
        break;
      case Focus.Previous:
        activeItemIndex = state.activeItemIndex ? state.activeItemIndex - 1 : 0;
        if (activeItemIndex < 0) activeItemIndex = state.items.length - 1;
        break;
      case Focus.Specific:
        for (let i = 0; i < state.items.length; i++) {
          if (state.items[i].id === action.id) {
            activeItemIndex = i;
            break;
          }
        }
        break;
    }
    return {
      ...state,
      activeItemIndex
    };
  },
  [ActionTypes.IncreaseHoverCount]: (state) => {
    const hoverCount = state.hoverCount + 1;
    return {
      ...state,
      hoverCount: hoverCount,
      menuState: hoverCount > 0 ? MenuStates.Open : MenuStates.Closed
    };
  },
  [ActionTypes.DecreaseHoverCount]: (state) => {
    const hoverCount = state.hoverCount - 1;
    return {
      ...state,
      hoverCount: hoverCount,
      menuState: hoverCount > 0 ? MenuStates.Open : MenuStates.Closed
    };
  },
  [ActionTypes.RegisterItem]: (state, action) => {
    const newItems = [
      ...state.items,
      { id: action.id, ref: action.ref }
    ];
    return { ...state, items: newItems };
  },
  [ActionTypes.UnregisterItem]: (state, action) => {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === action.id) {
        state.items.splice(i, 1);
        break;
      }
    }
    return state;
  }
};
