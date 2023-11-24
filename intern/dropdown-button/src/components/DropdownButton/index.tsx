import { ReactElement, ReactNode } from 'react';
import { DropdownButtonContextProvider } from './components/DropdownButtonContext';
import DropdownButtonWrapper from './components/DropdownButtonWrapper';

type DropdownButtonProps = {
  children: ReactElement; //menu list
  title: string; //custom button
};

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  title,
}: DropdownButtonProps): ReactElement => {
  return (
    <DropdownButtonContextProvider>
      <DropdownButtonWrapper content={title}>{children}</DropdownButtonWrapper>
    </DropdownButtonContextProvider>
  );
};

export default DropdownButton;
