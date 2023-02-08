export class Section {
  constructor({item, renderer}, containerSelector) {
    this._items = item
    this._renderer = renderer
    this._containerEl = document.querySelector(containerSelector)
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item)
    })
  }

  addCard(element) {
    this._containerEl.prepend(element)
  }
}
