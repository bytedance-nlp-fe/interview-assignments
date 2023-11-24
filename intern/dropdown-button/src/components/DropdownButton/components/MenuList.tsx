import { ReactElement, ReactNode } from 'react';
import '../styles/MenuList/MenuList.css';

type MenuListProps = {
  children: ReactNode;
  isMainMenu?: boolean;
};

const MenuList: React.FC<MenuListProps> = ({
  children,
  isMainMenu,
}: MenuListProps): ReactElement => {
  return (
    <ul className={isMainMenu ? 'menu-list-main' : 'menu-list'}>
      {children}
      {isMainMenu ? <div className="menu-list-main-triangle"></div> : null}
    </ul>
  );
};

export default MenuList;
