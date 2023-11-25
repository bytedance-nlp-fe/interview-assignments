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
    <DropdownButton.MenuDivider />
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
    <DropdownButton.MenuDivider />
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
