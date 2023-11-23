import { createContext, useContext, useState } from 'react';
import Item from '../utils/Item';

type DropdownButtonContextType = {
  mouseFocus: string | null; //the key of mouse focused item
  setMouseFocus: (mouseFocus: string | null) => void;
  keyBoardFocus: Item | null; //the key of keyboard focused item
  setKeyBoardFocus: (keyBoardFocus: Item | null) => void;
};

const FocusContext = createContext<DropdownButtonContextType>({
  mouseFocus: null,
  setMouseFocus: () => {},
  keyBoardFocus: null,
  setKeyBoardFocus: () => {},
});

export const useDropdownButtonContext = () => useContext(FocusContext);

export function DropdownButtonContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouseFocus, setMouseFocus] = useState<string | null>(null);
  const [keyBoardFocus, setKeyBoardFocus] = useState<Item | null>(null);
  return (
    <FocusContext.Provider
      value={{
        mouseFocus,
        setMouseFocus,
        keyBoardFocus,
        setKeyBoardFocus,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
}
