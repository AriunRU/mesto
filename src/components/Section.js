export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItemPrep(element) {
    this._container.prepend(element);
  }

  addItem(element) {
    this._container.append(element);
  }
}