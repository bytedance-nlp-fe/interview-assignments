import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropdownButton from './components/DropdownButton';
import MenuItem from './components/DropdownButton/components/MenuItem';
import MenuList from './components/DropdownButton/components/MenuList';

const button = (
  <button
    style={{
      backgroundColor: '#3498db',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
    }}
  >
    Click me
  </button>
);

const menuList = (
  <MenuList>
    <MenuItem content={<>1</>} itemKey={'1'}>
      <MenuList>
        <MenuItem
          content={
            <div
              style={{
                width: '200px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <i>icon</i>
              <div>1.1</div>
            </div>
          }
          itemKey={'1.1'}
        />
        <MenuItem content={<>1.2</>} itemKey={'1.2'} />
        <MenuItem content={<>1.3</>} itemKey={'1.3'}>
          <MenuList>
            <MenuItem content={<>1.3.1</>} itemKey={'1.3.1'} />
            <MenuItem content={<>1.3.2</>} itemKey={'1.3.2'} />
            <MenuItem content={<>1.3.3</>} itemKey={'1.3.3'} />
          </MenuList>
        </MenuItem>
      </MenuList>
    </MenuItem>
    <MenuItem content={<>2</>} itemKey={'2'} />
  </MenuList>
);

function App() {
  return (
    <div className="App">
      <DropdownButton button={button}>{menuList}</DropdownButton>
    </div>
  );
}

export default App;
