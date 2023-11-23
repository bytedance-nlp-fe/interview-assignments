import { createContext, useContext, useState } from 'react';

type DropdownButtonContextType = {
  mouseFocus: string | null; //the key of mouse focused item
  setMouseFocus: (mouseFocus: string | null) => void;
};

const FocusContext = createContext<DropdownButtonContextType>({
  mouseFocus: null,
  setMouseFocus: () => {},
});

export const useDropdownButtonContext = () => useContext(FocusContext);

export function DropdownButtonContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouseFocus, setMouseFocus] = useState<string | null>(null);

  return (
    <FocusContext.Provider
      value={{
        mouseFocus,
        setMouseFocus,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
}
