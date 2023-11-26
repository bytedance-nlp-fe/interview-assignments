
# Dropdown Button
[📄 Changelog here](./CHANGELOG.md)

##  Approach

Mouse Navigation:
- Use onMouseMove and onMouseLeave to set the focused item and toggle the menu list expansion

Key Board Navigation:
- Use Context to pass the keyboard focused item to the menu item
- Generate an item graph to store the relationship between the menu items

## Felexibility

- DropdownButton
  - the title of the button
- DropdownButton.MenuList
  - the number of the menu items
  - divider between any menu items
-  DropdownButton.MenuItem
   - the prefix, content, suffix of the menu item
   - the submenu of this current menu item

## Todo

The following features should be implemented for a polished DropdownButton component:
- [ ] Add OnClick event handler for the menu item
- [ ] Enable styles customization for the menu item by adding more styles in scss file

## Usage Example

``` javascript
import DropdownButton from './components/DropdownButton';

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
```
