import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DropdownButton from '../index';
import {
  RightArrowIcon,
  GitHubIcon,
  StitchesIcon,
  TwitterIcon,
  CheckIcon,
} from '../../../demo/Icons';

const button = (
  <DropdownButton title={'Options'}>
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
  </DropdownButton>
);
describe('DropdownButton', () => {
  it('should render correctly', () => {
    const wrapper = render(button);
    expect(wrapper.getByText('Options')).toBeInTheDocument();
  });
  it('should dropdown open correctly', () => {
    const wrapper = render(button);
    const dropdownButton = wrapper.getByText('Options');
    fireEvent.click(dropdownButton);
    expect(wrapper.getByText('New Tab')).toBeInTheDocument();
    expect(wrapper.getByText('New Window')).toBeInTheDocument();
    expect(wrapper.getByText('Favorites')).toBeInTheDocument();
    expect(wrapper.getByText('Downloads')).toBeInTheDocument();
    expect(wrapper.getByText('Show Toolbar')).toBeInTheDocument();
    expect(wrapper.getByText('Show Full URLs')).toBeInTheDocument();
  });
  it('should dropdown close correctly', () => {
    const wrapper = render(button);
    const dropdownButton = wrapper.getByText('Options');
    fireEvent.click(dropdownButton);
    expect(wrapper.getByText('New Tab')).toBeInTheDocument();
    expect(wrapper.getByText('New Window')).toBeInTheDocument();
    expect(wrapper.getByText('Favorites')).toBeInTheDocument();
    expect(wrapper.getByText('Downloads')).toBeInTheDocument();
    expect(wrapper.getByText('Show Toolbar')).toBeInTheDocument();
    expect(wrapper.getByText('Show Full URLs')).toBeInTheDocument();
    fireEvent.click(dropdownButton);
    expect(wrapper.queryByText('New Tab')).not.toBeInTheDocument();
    expect(wrapper.queryByText('New Window')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Favorites')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Downloads')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Show Toolbar')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Show Full URLs')).not.toBeInTheDocument();
  });
  it('should submenu open correctly by mouse', () => {
    const wrapper = render(button);
    const dropdownButton = wrapper.getByText('Options');
    fireEvent.click(dropdownButton);
    const favorites = wrapper.getByText('Favorites');
    fireEvent.mouseEnter(favorites);
    expect(wrapper.getByText('GitHub')).toBeInTheDocument();
    expect(wrapper.getByText('Stitches')).toBeInTheDocument();
    expect(wrapper.getByText('Twitter')).toBeInTheDocument();
  });
  it('should submenu close correctly by mouse', () => {
    const wrapper = render(button);
    const dropdownButton = wrapper.getByText('Options');
    fireEvent.click(dropdownButton);
    const favorites = wrapper.getByText('Favorites');
    fireEvent.mouseEnter(favorites);
    expect(favorites.parentElement).toHaveClass('submenu-expanded');
    expect(wrapper.getByText('GitHub')).toBeInTheDocument();
    expect(wrapper.getByText('Stitches')).toBeInTheDocument();
    expect(wrapper.getByText('Twitter')).toBeInTheDocument();
    fireEvent.mouseLeave(favorites);
    expect(wrapper.queryByText('GitHub')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Stitches')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Twitter')).not.toBeInTheDocument();
  });
  it('should dropdownbutton behaved correctly by keyboard', () => {
    const wrapper = render(button);
    const dropdownButton = wrapper.getByText('Options');
    fireEvent.click(dropdownButton);
    fireEvent.keyDown(dropdownButton, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(wrapper.getByText('New Tab').parentElement).toHaveClass(
      'submenu-expanded menu-item-default-selected',
    );
    expect(wrapper.getByText('New Window').parentElement).not.toHaveClass(
      'submenu-expanded menu-item-default-selected',
    );
    fireEvent.keyDown(dropdownButton, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(wrapper.getByText('New Window').parentElement).toHaveClass(
      'submenu-expanded menu-item-default-selected',
    );
    fireEvent.keyDown(dropdownButton, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(wrapper.getByText('Favorites').parentElement).toHaveClass(
      'submenu-expanded menu-item-default-selected',
    );
    fireEvent.keyDown(dropdownButton, {
      key: 'ArrowRight',
      code: 'ArrowRight',
    });
    expect(wrapper.getByText('GitHub')).toBeInTheDocument();
    expect(wrapper.getByText('Stitches')).toBeInTheDocument();
    expect(wrapper.getByText('Twitter')).toBeInTheDocument();
    expect(wrapper.getByText('GitHub').parentElement).toHaveClass(
      'submenu-expanded menu-item-default-selected',
    );
  });
});
