import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useDropdownButtonContext } from './DropdownButtonContext';
import '../styles/MenuItem.css';

type MenuItemProps = {
  itemKey: string;
  content: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactElement;
};

const MenuItem: React.FC<MenuItemProps> = ({
  itemKey,
  content,
  prefix,
  suffix,
  children,
}: MenuItemProps): ReactElement => {
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);
  const { mouseFocus, setMouseFocus, keyBoardFocus, setKeyBoardFocus } =
    useDropdownButtonContext();
  const onKeyBoardFocus = keyBoardFocus?.key === itemKey;
  const onSelected = mouseFocus === itemKey || onKeyBoardFocus;

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
  }, [itemKey, keyBoardFocus]);

  return (
    <li
      key={itemKey}
      className={'menu-item'}
      onMouseEnter={() => {
        setIsSubMenuExpanded(true);
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
        className={
          onSelected ? 'menu-item-default-selected' : 'menu-item-default'
        }
      >
        {<div className={'menu-item-prefix'}>{prefix}</div>}
        <div className="menu-item-content">{content}</div>
        {<div className={'menu-item-suffix'}>{suffix}</div>}
      </div>
      {isSubMenuExpanded && children}
    </li>
  );
};

export default MenuItem;
