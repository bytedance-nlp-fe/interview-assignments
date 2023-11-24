import DropdownButton from '../components/DropdownButton';
import {
  RightArrowIcon,
  StitchesIcon,
  CheckIcon,
  GitHubIcon,
  TwitterIcon,
} from './Icons';

export const menuList = (
  <DropdownButton.MenuList>
    <DropdownButton.MenuItem content={'New Tab'} itemKey={'New Tab'} />
    <DropdownButton.MenuItem content={'New Window'} itemKey={'New Window'} />
    <DropdownButton.MenuItem
      content={'Favorites'}
      suffix={RightArrowIcon}
      itemKey={'Favorites'}
    >
      <DropdownButton.MenuList>
        <DropdownButton.MenuItem
          content={'GitHub'}
          itemKey={'GitHub'}
          prefix={GitHubIcon}
        />
        <DropdownButton.MenuItem
          prefix={StitchesIcon}
          content={'Stitches'}
          itemKey={'Stitches'}
        />
        <DropdownButton.MenuItem
          content={'Twitter'}
          itemKey={'Twitter'}
          prefix={TwitterIcon}
        />
      </DropdownButton.MenuList>
    </DropdownButton.MenuItem>
    <DropdownButton.MenuItem content={'Downloads'} itemKey={'Downloads'} />
    <DropdownButton.MenuItem
      content={'Show Toolbar'}
      itemKey={'Show Toolbar'}
      prefix={CheckIcon}
    />
    <DropdownButton.MenuItem
      content={'Show Full URLs'}
      itemKey={'Show Full URLs'}
    />
  </DropdownButton.MenuList>
);

export const button = (
  <button>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          lineHeight: '1.5rem',
          verticalAlign: 'middle',
        }}
      >
        Options
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '0.5rem',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 48 48" fill="none">
          <path
            d="M39.6 17.444L24.044 33 8.487 17.444"
            stroke="#4E5969"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  </button>
);
