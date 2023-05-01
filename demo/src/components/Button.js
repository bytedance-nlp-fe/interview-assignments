import { useRef } from 'react';
import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

const Button = () => {
  let ref = useRef();

  return (
    <div className="menu-container" ref={ref}>
      <ul className="menus">
        {menuItems.map((menu) => {
          return (
            <MenuItems
              items={menu}
              depthLevel={1}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Button;
