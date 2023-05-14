import React from "react";

type SubMenuItem = {
  title: string;
  icon: string | null;
  handleClick?: () => void;
}

interface MenuItemProps {
  title: string;
  isCheckAble?: boolean;
  isChecked?: boolean;
  handleClick: () => void;
  subMenuItems?: SubMenuItem[];
};

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  isCheckAble = false,
  isChecked,
  handleClick,
  subMenuItems,
}) => {
  return (
    <li onClick={handleClick}>{title}</li>
  );
}