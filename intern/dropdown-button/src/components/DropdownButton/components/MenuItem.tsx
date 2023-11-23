import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useDropdownButtonContext } from './DropdownButtonContext';

type MenuItemProps = {
  itemKey: string;
  content: ReactNode;
  children?: ReactElement;
};

const MenuItem: React.FC<MenuItemProps> = ({
  itemKey,
  content,
  children,
}: MenuItemProps): ReactElement => {
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);
  const { mouseFocus, setMouseFocus, keyBoardFocus, setKeyBoardFocus } =
    useDropdownButtonContext();
  const onKeyBoardFocus = keyBoardFocus?.key === itemKey;

  useEffect(() => {
    setIsSubMenuExpanded(false);
    let item = keyBoardFocus;
    while (item) {
      if (item.key === itemKey) {
        setIsSubMenuExpanded(true);
        break;
      }
      item = item.parent;
    }
  }, [onKeyBoardFocus]);

  return (
    <li
      key={itemKey}
      onMouseEnter={() => {
        setIsSubMenuExpanded(true);
      }}
      style={{
        position: 'relative',
        listStyle: 'none',
      }}
      onMouseLeave={() => {
        setIsSubMenuExpanded(false);
      }}
    >
      <div
        onMouseMove={() => {
          setIsSubMenuExpanded(true);
          setMouseFocus(itemKey);
          setKeyBoardFocus(null);
        }}
        onMouseLeave={() => {
          setMouseFocus(null);
        }}
        style={{
          padding: '1rem 2rem',
          backgroundColor:
            onKeyBoardFocus || mouseFocus === itemKey ? 'blue' : 'inherit',
        }}
      >
        {content}
      </div>
      {isSubMenuExpanded && children}
    </li>
  );
};

export default MenuItem;
