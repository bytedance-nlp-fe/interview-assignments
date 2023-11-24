import { ReactElement, ReactNode } from 'react';

type MenuListProps = {
  children: ReactNode;
  isMainMenu?: boolean;
};

const defaultStyle: React.CSSProperties = {
  position: 'absolute',
  padding: 0,
  margin: 0,
  top: 0,
  left: '100%',
  backgroundColor: 'white',
  borderRadius: '5px',
};

const mainMenuStyle: React.CSSProperties = {
  ...defaultStyle,
  paddingTop: '0.25rem',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
};

const MenuList: React.FC<MenuListProps> = ({
  children,
  isMainMenu,
}: MenuListProps): ReactElement => {
  return <ul style={isMainMenu ? mainMenuStyle : defaultStyle}>{children}</ul>;
};

export default MenuList;
