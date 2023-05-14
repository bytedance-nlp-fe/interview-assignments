import React from "react";

interface MenuProps {
  name: string;
  children?: React.ReactNode;
  showDropDown: boolean;
  handleClick?: () => void;
}

export const Menu: React.FC<MenuProps> = ({ name, children, showDropDown, handleClick }) => {

  return (
    <>
      <button onClick={handleClick}>{name}</button>
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '0',
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid gray',
          display: showDropDown ? 'block' : 'none',
        }}
      >
        {children}
      </div>
    </>

  );
}