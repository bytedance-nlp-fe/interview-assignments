import { ReactElement, ReactNode } from 'react';

type MenuListProps = {
  children: ReactNode;
  isMainMenu?: boolean;
};

const defaultStyle: React.CSSProperties = {
  position: 'absolute',
  padding: 0,
  top: 0,
  left: '100%',
};

const mainMenuStyle: React.CSSProperties = {
  ...defaultStyle,
  top: '100%',
  left: 0,
};

const MenuList: React.FC<MenuListProps> = ({
  children,
  isMainMenu,
}: MenuListProps): ReactElement => {
  return <ul style={isMainMenu ? mainMenuStyle : defaultStyle}>{children}</ul>;
};

export default MenuList;
