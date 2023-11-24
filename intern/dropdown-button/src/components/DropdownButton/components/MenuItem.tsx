import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useDropdownButtonContext } from './DropdownButtonContext';

type MenuItemProps = {
  itemKey: string;
  content: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactElement;
};

const MenuItem: React.FC<MenuItemProps> = ({
  itemKey,
  content,
  prefix,
  suffix,
  children,
}: MenuItemProps): ReactElement => {
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);
  const { mouseFocus, setMouseFocus, keyBoardFocus, setKeyBoardFocus } =
    useDropdownButtonContext();
  const onKeyBoardFocus = keyBoardFocus?.key === itemKey;

  useEffect(() => {
    setIsSubMenuExpanded(false);
    let item = keyBoardFocus;
    while (item) {
      if (item.key === itemKey) {
        setIsSubMenuExpanded(true);
        break;
      }
      item = item.parent;
    }
  }, [onKeyBoardFocus]);

  return (
    <li
      key={itemKey}
      onMouseEnter={() => {
        setIsSubMenuExpanded(true);
      }}
      style={{
        position: 'relative',
        listStyle: 'none',
        textAlign: 'left',
      }}
      onMouseLeave={() => {
        setIsSubMenuExpanded(false);
      }}
    >
      <div
        onMouseMove={() => {
          setIsSubMenuExpanded(true);
          setMouseFocus(itemKey);
          setKeyBoardFocus(null);
        }}
        onMouseLeave={() => {
          setMouseFocus(null);
        }}
        style={{
          padding: '0.25rem 0rem',
          margin: '0.25rem 0.25rem',
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '5px',
          backgroundColor:
            onKeyBoardFocus || mouseFocus === itemKey ? 'blue' : 'inherit',
        }}
      >
        {
          <div
            style={
              onKeyBoardFocus || mouseFocus === itemKey
                ? {
                    color: 'white',
                    width: '2rem',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }
                : {
                    width: '2rem',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }
            }
          >
            {prefix}
          </div>
        }
        <div
          style={{
            flex: 'auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div
            style={
              onKeyBoardFocus || mouseFocus === itemKey
                ? {
                    flex: 'auto',
                    width: 'max-content',
                    color: 'white',
                  }
                : {
                    flex: 'auto',
                    width: 'max-content',
                  }
            }
          >
            {content}
          </div>
          {
            <div
              style={
                onKeyBoardFocus || mouseFocus === itemKey
                  ? {
                      width: '2rem',
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }
                  : {
                      width: '2rem',
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'center',
                    }
              }
            >
              {suffix}
            </div>
          }
        </div>
      </div>
      {isSubMenuExpanded && children}
    </li>
  );
};

export default MenuItem;
