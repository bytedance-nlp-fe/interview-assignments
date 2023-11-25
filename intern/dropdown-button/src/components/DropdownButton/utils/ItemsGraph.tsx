import React from 'react';
import { ReactElement } from 'react';
import { MenuDivider } from '../components/MenuDivider';
import Item from './Item';

export default function generateItemsGraph(menulist: ReactElement): Item[] {
  const dividerFilteredMenu = React.cloneElement(menulist, {
    children: menulist.props.children.filter((element: ReactElement) => {
      return element.type !== MenuDivider;
    }),
  });
  const tree = generateItemsTree(dividerFilteredMenu, null);
  //connect siblings
  connectSibling(tree);
  return tree;
}

function connectSibling(items: Item[]): void {
  items.forEach((item: Item, index: number) => {
    const previousSibling = index === 0 ? null : items[index - 1];
    const nextSibling = index === items.length - 1 ? null : items[index + 1];
    item.previousSibling = previousSibling;
    item.nextSibling = nextSibling;
    connectSibling(item.subItems);
  });
}

function generateItemsTree(
  elements: ReactElement,
  parent: Item | null,
): Item[] {
  return elements.props.children.map((element: ReactElement) => {
    if (element.props.children) {
      const item = new Item(element.props.itemKey, parent, null, null, []);
      item.subItems = generateItemsTree(element.props.children, item);
      return item;
    }
    return new Item(element.props.itemKey, parent, null, null, []);
  });
}
