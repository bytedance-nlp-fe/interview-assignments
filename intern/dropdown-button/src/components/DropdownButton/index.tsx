import { ReactElement } from 'react';
import { DropdownButtonContextProvider } from './components/DropdownButtonContext';
import DropdownButtonWrapper from './components/DropdownButtonWrapper';
import MenuItem from './components/MenuItem';
import MenuList from './components/MenuList';

type DropdownButtonProps = {
  children: ReactElement; //menu list
  title: string; //custom button
};

type DropdownButtonComponent = React.FC<DropdownButtonProps> & {
  MenuItem: typeof MenuItem;
  MenuList: typeof MenuList;
};

const DropdownButton: DropdownButtonComponent = ({
  children,
  title,
}: DropdownButtonProps): ReactElement => {
  return (
    <DropdownButtonContextProvider>
      <DropdownButtonWrapper content={title}>{children}</DropdownButtonWrapper>
    </DropdownButtonContextProvider>
  );
};

DropdownButton.MenuItem = MenuItem;
DropdownButton.MenuList = MenuList;
export default DropdownButton;
