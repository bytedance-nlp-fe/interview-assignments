export default class Item {
  key: string;
  parent: Item | null;
  previousSibling: Item | null;
  nextSibling: Item | null;
  subItems: Item[];
  constructor(
    key: string,
    parent: Item | null,
    previousSibling: Item | null,
    nextSibling: Item | null,
    subItems: Item[],
  ) {
    this.key = key;
    this.parent = parent;
    this.previousSibling = previousSibling;
    this.nextSibling = nextSibling;
    this.subItems = subItems;
  }
}
