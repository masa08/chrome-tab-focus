export class TargetDomList {
  constructor(list) {
    this.list = list;
    this.prevIndex = this.list.length - 1;
    this.nextIndex = 0;
  }

  prev() {
    if (this.prevIndex === -1) {
      this.prevIndex = this.list.length - 1;
      this.nextIndex = 0;
    }

    const newTargetDom = this.#getTargetAnchorDom(this.prevIndex);
    this.#addFocus(newTargetDom);
    this.#movePrev();
  }

  next() {
    if (this.nextIndex === this.list.length) this.nextIndex = 0;

    const newTargetDom = this.#getTargetAnchorDom(this.nextIndex);
    this.#addFocus(newTargetDom);
    this.#moveNext();
  }

  #moveNext() {
    this.nextIndex = this.nextIndex + 1;
    this.prevIndex = this.nextIndex - 2;
  }

  #movePrev() {
    this.prevIndex = this.prevIndex - 1;
    this.nextIndex = this.prevIndex + 2;
  }

  #getTargetAnchorDom(index) {
    return this.list[index].getElementsByTagName('a')[0];
  }

  #addFocus(target) {
    target.setAttribute('class', 'focus-visible');
    target.focus();
  }
}
