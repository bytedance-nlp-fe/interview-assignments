export const menuItems = [
  {
    menu: 'Options',
    submenu: [
      {
        title: 'New Tab',
      },
      {
        title: 'New Window',
      },
      {
      },
      {
        title: 'Favorite',
        submenu: [
          {
            icon: 'img/github.png',
            title: 'GitHub',
          },
          {
            icon: 'img/stitches.png',
            title: 'Stitches',
          },
          {
            icon: 'img/stitches.png',
            title: 'Twitter',
          },
        ],
      },
      {
        title: 'Downloads',
      },
      {
      },
      {
        title: 'Show Toolbar',
        checkable: true,
        checked: true,
      },
      {
        title: 'Show Full URLs',
        checkable: true,
        checked: false,
      },
    ],
  }
];
