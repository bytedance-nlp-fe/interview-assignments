import React from "react";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export const DropDown: React.FC<{}> = () => {
  const menuItems = [
    {
      title: "New Tab",
      onClick: () => {

      }
    },
    {
      title: "New Window",
    },
    {
      title: "Favorite",
      subMenuItems: [
        {
          icon: 'faGithub',
          title: 'GitHub',
        },
        {
          icon: 'faComment',
          title: 'Stitches',
        },
        {
          icon: 'faTwitter',
          title: 'Twitter',
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

  return (
    <Menu name="options" >
      {
        menuItems.map((item) => (<MenuItem
          title={item.title}
          isCheckAble={item.isCheckAble}
          isChecked={item.isChecked}
          onClick={() => { item.onClick?.(); }}
          subMenuItems={item.subMenuItems}
        />))
      }
    </Menu>
  );
};
