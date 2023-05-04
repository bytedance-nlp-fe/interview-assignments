import React from 'react';
import { Menu } from 'antd';
import {
  DownOutlined,
  GithubOutlined,
  TwitterOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import './App.css';
function App() {
  const { SubMenu, Item } = Menu;

  interface DropdownOption {
    label: string;
    value: string;
    children?: DropdownOption[];
    icon?: any;
  }

  interface menuDropdownProps {
    options: DropdownOption[];
  }

  const renderSubMenu = (option: DropdownOption, isTopLevel?: boolean) => {
    const arrowIcon = isTopLevel ? <DownOutlined /> : null;
    const { label, value, children, icon } = option; // 解构 icon

    if (!children) {
      return (
        <Item key={value}>
          <span>{icon}</span>
          <span>{label}</span>
        </Item>
      );
    }
    return (
      <SubMenu key={value} title={label} icon={arrowIcon}>
        {children.map((childOption) => renderSubMenu(childOption))}
      </SubMenu>
    );
  };

  const Dropdown: React.FC<menuDropdownProps> = ({ options }) => {
    return (
      <Menu mode="horizontal" theme="light">
        {options.map((option) => renderSubMenu(option, true))}
      </Menu>
    );
  };

  const menuOptions = [
    {
      label: 'Options',
      value: 'options',
      children: [
        {
          label: 'New Tab',
          value: 'option1',
        },
        {
          label: 'New Window',
          value: 'option2',
        },
        {
          label: 'Favorites',
          value: 'option3',
          children: [
            {
              label: 'Github',
              icon: <GithubOutlined />,
              value: 'option3-1',
            },
            {
              label: 'Twitter',
              value: 'option3-2',
              icon: <TwitterOutlined />,
            },
            {
              label: 'Weibo',
              value: 'option3-3',
              icon: <WeiboOutlined />,
            },
          ],
        },
        {
          label: 'Downloads',
          value: 'option4',
        },
        {
          label: 'Show Toolbar',
          value: 'option5',
        },
        {
          label: 'Show Full URLs',
          value: 'option6',
        },
      ],
    },
  ];
  return (
    <div className="App">
      <Dropdown options={menuOptions} />
    </div>
  );
}

export default App;
