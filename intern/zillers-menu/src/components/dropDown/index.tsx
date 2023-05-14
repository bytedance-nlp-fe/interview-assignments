import React, { useState } from "react";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export const DropDown: React.FC<{}> = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const menuItems = [
    {
      title: "New Tab",
      onClick: () => { },
    },
    {
      title: "New Window",
    },
    {
      title: "Favorite",
      subMenuItems: [
        {
          icon: "faGithub",
          title: "GitHub",
        },
        {
          icon: "faComment",
          title: "Stitches",
        },
        {
          icon: "faTwitter",
          title: "Twitter",
        },
      ],
    },
    {
      title: "Downloads",
    },
    {
      title: "Show Toolbar",
      isCheckAble: true,
      isChecked: true,
    },
    {
      title: "Show Full URLs",
      isCheckAble: true,
      isChecked: false,
    },
  ];

  const handleOnClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOnClose = () => {
    setShowDropDown(false);
  };

  return (
    <Menu name="options" handleClick={handleOnClick} showDropDown={showDropDown}>
      {menuItems.map((item) => (
        <MenuItem
          title={item.title}
          isCheckAble={item.isCheckAble}
          isChecked={item.isChecked}
          handleClick={() => {
            item.onClick?.();
            handleOnClose();
          }}
          subMenuItems={item.subMenuItems}
        />
      ))}
    </Menu>
  );
};
