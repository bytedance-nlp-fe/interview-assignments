import { ReactElement } from 'react';
import Item from './Item';

export default function generateItemsGraph(elements: ReactElement): Item[] {
  const tree = generateItemsTree(elements, null);
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
