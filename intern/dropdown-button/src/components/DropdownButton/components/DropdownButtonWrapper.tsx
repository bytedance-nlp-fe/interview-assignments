import React from 'react';
import { ReactElement, useState } from 'react';
import Item from '../utils/Item';
import generateItemsGraph from '../utils/ItemsGraph';
import { useDropdownButtonContext } from './DropdownButtonContext';
import '../styles/Button/Button.css';

type DropdownButtonWrapperProps = {
  children: ReactElement;
  content: string;
};

const DropdownButtonWrapper: React.FC<DropdownButtonWrapperProps> = ({
  children,
  content,
}: DropdownButtonWrapperProps): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mainMenu = setAsMainMenu(children);
  const graph = generateItemsGraph(children);
  const { keyBoardFocus, setKeyBoardFocus, setMouseFocus } =
    useDropdownButtonContext();

  return (
    <button
      className="button"
      onClick={() => {
        setIsExpanded(!isExpanded);
        setKeyBoardFocus(null);
      }}
      onKeyDown={event =>
        keyDownHandler(
          event,
          graph,
          setMouseFocus,
          keyBoardFocus,
          setKeyBoardFocus,
        )
      }
    >
      {styledButton(content)}
      {isExpanded ? mainMenu : null}
    </button>
  );
};

export default DropdownButtonWrapper;

function setAsMainMenu(menu: ReactElement): ReactElement {
  return React.cloneElement(menu, { isMainMenu: true });
}

function keyDownHandler(
  event: React.KeyboardEvent<HTMLButtonElement>,
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

const downArrow = (
  <svg width="12" height="12" viewBox="0 0 48 48" fill="none">
    <path
      d="M39.6 17.444L24.044 33 8.487 17.444"
      stroke="#4E5969"
      strokeWidth="2"
    />
  </svg>
);

const styledButton = (content: string) => (
  <div className="button-wrapper">
    <div className="button-content">{content}</div>
    <div className="button-suffix">{downArrow}</div>
  </div>
);
