import React from "react";

type SubMenuItem = {
  title: string;
  icon: string | null;
  onClick?: () => void;
}

interface MenuItemProps {
  title: string;
  isCheckAble?: boolean;
  isChecked?: boolean;
  onClick?: () => void;
  subMenuItems?: SubMenuItem[];
};

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  isCheckAble = false,
  isChecked,
  onClick = () => { },
  subMenuItems,
}) => {
  return (
    <></>
  );
}