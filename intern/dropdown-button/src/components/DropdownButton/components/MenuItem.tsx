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
  const { mouseFocus, setMouseFocus } = useDropdownButtonContext();

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
        onMouseEnter={() => {
          setIsSubMenuExpanded(true);
          setMouseFocus(itemKey);
        }}
        onMouseLeave={() => {
          setMouseFocus(null);
        }}
        style={{
          padding: '1rem 2rem',
          backgroundColor: mouseFocus === itemKey ? 'blue' : 'inherit',
        }}
      >
        {content}
      </div>
      {isSubMenuExpanded && children}
    </li>
  );
};

export default MenuItem;
