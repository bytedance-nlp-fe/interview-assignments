import React, { useState } from "react";

type SubMenuItem = {
  title: string;
  icon: string | null;
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
        <li onClick={item.handleClick}>{item.title}</li>
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
      onClick={() => {
        handleClick();
        subMenuItems && handleClickForSubMenu();
      }}
    >
      {subMenuItems ? (
        <div style={{ display: "flex", alignItems: "start" }}>
          <span>{title}</span>
          showSubMenu
          <span
            style={{
              marginLeft: "20px",
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
