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
