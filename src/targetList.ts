export class TargetDomList {
  list: HTMLCollectionOf<Element>;
  prevIndex: number;
  nextIndex: number;

  constructor(list: HTMLCollectionOf<Element>) {
    this.list = list;
    this.prevIndex = this.list.length - 1;
    this.nextIndex = 0;
  }

  prev() {
    // TODO: refactor
    if (this.prevIndex === -1) this.prevIndex = this.list.length - 1;

    const newTargetDom = this.#getTargetAnchorDom(this.prevIndex);
    this.#addFocus(newTargetDom);
    this.#movePrev();
  }

  next() {
    // TODO: refactor
    if (this.nextIndex >= this.list.length) this.nextIndex = 0;

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

  #getTargetAnchorDom(index: number) {
    return this.list[index].getElementsByTagName('a')[0];
  }

  #addFocus(target: HTMLAnchorElement) {
    target.setAttribute('class', 'focus-visible');
    target.focus();
  }
}
