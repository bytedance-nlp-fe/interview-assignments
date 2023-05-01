import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (

    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.menu ? (
        <div>
          <div className='menu-item-container'><p className="menu-item">{items.menu}</p></div>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </div>
      ) : !items.title ? (
        <div class="end-section"></div>
      ) : items.submenu ? (
        <a href="#">
          <span className="checked">&nbsp;</span>
          <p className="topic">{items.title}</p>
          <Dropdown
            depthLevel={depthLevel}
              submenus={items.submenu}
            dropdown={dropdown}
          />
          <span className="submenu">&rsaquo;</span>
          </a>
      ) : (
        <a href="#">
          {items.checkable && items.checked ? (
            <span className="checked">&radic;</span>
          ) : items.icon ? (
            <FontAwesomeIcon icon={faTwitter} />
          ) : (
            <span className="checked">&nbsp;</span>
          )}
          <p className="topic">{items.title}</p>
          <span className="submenu">&nbsp;</span>
        </a>
      )}
    </li>
  )
}

export default MenuItems;
