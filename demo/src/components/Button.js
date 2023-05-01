import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Button = () => {
  return (
      <ul className="menus">
        {menuItems.map((menu) => {
          return (
            <MenuItems
              items={menu}
              depthLevel={0}
            />
          );
        })}
      </ul>
  );
};

export default Button;
