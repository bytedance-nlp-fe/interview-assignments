import React, { useState } from "react";
import "./MenuItem.css";

type SubMenuItem = {
  title: string;
  icon?: string;
  handleClick?: () => void;
};

interface MenuItemProps {
  title: string;
  isCheckAble?: boolean;
  isChecked?: boolean;
  handleClick: () => void;
  subMenuItems?: SubMenuItem[];
}

const SubMenuItems: React.FC<{ subMenuItems: SubMenuItem[] }> = ({
  subMenuItems,
}) => {
  return (
    <>
      {subMenuItems.map((item) => (
        <li className={item.icon} onClick={item.handleClick}>
          {item.title}
        </li>
      ))}
    </>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  isCheckAble = false,
  isChecked,
  handleClick,
  subMenuItems,
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleClickForSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <li
      className={`menuItem ${subMenuItems ? "arrow" : ""} ${
        isCheckAble && isChecked ? "checked" : ""
      }`}
      onClick={() => {
        handleClick();
        subMenuItems && handleClickForSubMenu();
      }}
    >
      {subMenuItems ? (
        <div style={{ display: "flex", alignItems: "start" }}>
          <span>{title}</span>
          <span
            className="menuItemContainer"
            style={{
              position: "absolute",
              marginLeft: "150px",
              display: showSubMenu ? "block" : "none",
            }}
          >
            <SubMenuItems subMenuItems={subMenuItems} />
          </span>
        </div>
      ) : (
        <span>{title}</span>
      )}
    </li>
  );
};
