import { ReactElement, ReactNode } from 'react';
import { DropdownButtonContextProvider } from './components/DropdownButtonContext';
import DropdownButtonWrapper from './components/DropdownButtonWrapper';

type DropdownButtonProps = {
  children: ReactElement; //menu list
  button: ReactElement; //custom button
};

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  button,
}: DropdownButtonProps): ReactElement => {
  return (
    <DropdownButtonContextProvider>
      <DropdownButtonWrapper button={button}>{children}</DropdownButtonWrapper>
    </DropdownButtonContextProvider>
  );
};

export default DropdownButton;
