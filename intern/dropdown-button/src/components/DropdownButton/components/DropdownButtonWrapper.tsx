import React from 'react';
import { ReactElement, useState } from 'react';

const DropdownButtonWrapper: React.FC<DropdownButtonWrapperProps> = ({
  children,
  button,
}: DropdownButtonWrapperProps): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const settledChildren = setAsMainMenu(children);
  const wrappedButton = wrapChildrenUnderButton(
    button,
    settledChildren,
    isExpanded,
    setIsExpanded,
  );
  return <div>{wrappedButton}</div>;
};

export default DropdownButtonWrapper;

type DropdownButtonWrapperProps = {
  children: ReactElement;
  button: ReactElement;
};

function setAsMainMenu(menu: ReactElement): ReactElement {
  return React.cloneElement(menu, { isMainMenu: true });
}

function wrapChildrenUnderButton(
  button: ReactElement,
  children: ReactElement,
  isExpanded: boolean,
  setIsExpanded: (isExpanded: boolean) => void,
) {
  const clonedChildren = isExpanded
    ? [button.props.children, children]
    : button.props.children;

  return React.cloneElement(
    button,
    {
      style: button.props.style
        ? { ...button.props.style, position: 'relative' }
        : { position: 'relative' },
      onClick: () => {
        setIsExpanded(!isExpanded);
      },
    },
    clonedChildren,
  );
}
