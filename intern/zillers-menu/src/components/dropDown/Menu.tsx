import React from "react";

interface MenuProps {
  name: string;
  children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ name, children }) => {

  return (
    <>
      <button>{name}</button>
      {children}
    </>

  );
}