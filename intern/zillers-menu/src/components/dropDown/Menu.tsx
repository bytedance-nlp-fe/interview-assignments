import React from "react";

export const Menu: React.FC<{ name: string }> = ({ name }) => {

  return (
    <button>{name}</button>
  );
}