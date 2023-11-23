import React from 'react';
import { ReactElement, useState } from 'react';
import Item from '../utils/Item';
import generateItemsGraph from '../utils/ItemsGraph';
import { useDropdownButtonContext } from './DropdownButtonContext';

type DropdownButtonWrapperProps = {
  children: ReactElement;
  button: ReactElement;
};

const DropdownButtonWrapper: React.FC<DropdownButtonWrapperProps> = ({
  children,
  button,
}: DropdownButtonWrapperProps): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mainMenu = setAsMainMenu(children);
  const graph = generateItemsGraph(children);
  const { keyBoardFocus, setKeyBoardFocus, setMouseFocus } =
    useDropdownButtonContext();
  const clonedChildren = isExpanded
    ? [button.props.children, mainMenu]
    : button.props.children;

  const wrappedButton = React.cloneElement(
    button,
    {
      style: button.props.style
        ? { ...button.props.style, position: 'relative' }
        : { position: 'relative' },
      onClick: () => {
        setIsExpanded(!isExpanded);
      },
      onKeyDown: (event: KeyboardEvent) => {
        keyDownHandler(
          event,
          graph,
          setMouseFocus,
          keyBoardFocus,
          setKeyBoardFocus,
        );
      },
    },
    clonedChildren,
  );

  return <div>{wrappedButton}</div>;
};

export default DropdownButtonWrapper;

function setAsMainMenu(menu: ReactElement): ReactElement {
  return React.cloneElement(menu, { isMainMenu: true });
}

function keyDownHandler(
  event: KeyboardEvent,
  graph: Item[],
  setMouseFocus: (mouseFocus: string | null) => void,
  keyBoardFocus: Item | null,
  setKeyBoardFocus: (keyBoardFocus: Item | null) => void,
) {
  setMouseFocus(null);
  const functionMap = {
    ArrowDown: () => {
      const currentFocus: Item | null = keyBoardFocus;
      if (currentFocus === null) {
        setKeyBoardFocus(graph[0]);
        return;
      }
      if (currentFocus.nextSibling === null) {
        return;
      }
      setKeyBoardFocus(currentFocus.nextSibling);
    },
    ArrowUp: () => {
      const currentFocus: Item | null = keyBoardFocus;
      if (currentFocus === null) {
        return;
      }
      if (currentFocus.previousSibling === null) {
        return;
      }
      setKeyBoardFocus(currentFocus.previousSibling);
    },
    ArrowLeft: () => {
      const currentFocus: Item | null = keyBoardFocus;
      if (currentFocus === null) {
        return;
      }
      if (currentFocus.parent === null) {
        return;
      }
      setKeyBoardFocus(currentFocus.parent);
    },
    ArrowRight: () => {
      const currentFocus: Item | null = keyBoardFocus;
      if (currentFocus === null) {
        return;
      }
      if (currentFocus.subItems.length === 0) {
        return;
      }
      setKeyBoardFocus(currentFocus.subItems[0]);
    },
  };
  const key = event.key as 'ArrowDown' | 'ArrowUp' | 'ArrowRight' | 'ArrowLeft';
  if (functionMap[key]) {
    functionMap[key]();
  }
}
