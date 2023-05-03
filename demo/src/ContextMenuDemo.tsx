import React, { useEffect, useState } from 'react';
import {
  BlockOutlined,
  DownOutlined,
  GithubOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { ContextMenu, IRFCMenu } from 'react-frame-contextmenu';
import styled from '@emotion/styled';

const ContextMenuDemo: React.FC = () => {
  const [isOpen, setOpen] = useState(false); 
  const contextMenu = React.useRef<ContextMenu>(
    new ContextMenu({
      id: 'basic',
      style: { padding: '0 10px 0 20px', background: 'hsl(240deg 100% 99%)', fontSize: '15px', minWidth: '200px' }
    })
  );
  const onClickMenu: IRFCMenu.OnClickItem = React.useCallback(menuItem => {
    console.log(menuItem);
  }, []);

  useEffect(() => {
    if(isOpen) {
      let e = document.getElementsByClassName('menu-btn')[0];
      contextMenu.current.popup({ x: e.getBoundingClientRect().left - 40, y: e.getBoundingClientRect().bottom + 275 });
    }
  }, [isOpen]);

  useEffect(() => {
    contextMenu.current.setMenu([
      {
        label: 'New Tab',
        click: onClickMenu,
      },
      {
        label: 'New Window',
        click: onClickMenu
      },
      { type: 'separator' },
      {
        label: 'Favorites',
        submenu: [
          {
            label: 'Github',
            icon: <GithubOutlined />,
            click: onClickMenu,
          },
          {
            label: 'Stitches',
            icon: <BlockOutlined />,
            click: onClickMenu,
          },
          {
            label: 'Twitter',
            icon: <TwitterOutlined />,
            click: onClickMenu,
          }
        ]
      },
      {
        label: 'Downloads',
        click: onClickMenu
      },
      { type: 'separator' },
      {
        type: 'checkbox',
        label: 'Show Toolbar',
        checked: true,
        click: (menuItem, w, e) => {
          console.log(menuItem);
        },
      },
      {
        type: 'checkbox',
        label: 'Show Full URLs',
        click: (menuItem, w, e) => {
          console.log(menuItem);
        }
      }
    ]);
  }, [onClickMenu]);

  return (
    <Container data-testid={'context-menu-sample-div'}>
        <div className="menu-btn" onClick={() => { setOpen(!isOpen) }}>Options <DownOutlined className='menu-icon' /></div>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  border-radius: 10px;
  height: 500px;
  background-image: url('./bg.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ContextMenuDemo;