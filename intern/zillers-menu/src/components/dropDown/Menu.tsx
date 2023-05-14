import React from "react";
import "./Menu.css";

interface MenuProps {
  name: string;
  children?: React.ReactNode;
  showDropDown: boolean;
  handleClick?: () => void;
}

export const Menu: React.FC<MenuProps> = ({
  name,
  children,
  showDropDown,
  handleClick,
}) => {
  return (
    <div className="menuContainer">
      <button className="button" onClick={handleClick}>
        {name}
      </button>
      <div
        className="menuItemContainer"
        style={{
          display: showDropDown ? "block" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};
