export class TargetDomList {
  list: HTMLAnchorElement[];
  prevIndex: number;
  nextIndex: number;

  constructor(list: HTMLAnchorElement[]) {
    this.list = list;
    this.prevIndex = this.list.length - 1;
    this.nextIndex = 0;
  }

  prev(): void {
    const newTargetDom = this.list[this.prevIndex];
    this.#addFocus(newTargetDom);
    this.#movePrev();
  }

  next(): void {
    const newTargetDom = this.list[this.nextIndex];
    this.#addFocus(newTargetDom);
    this.#moveNext();
  }

  #moveNext(): void {
    if (this.nextIndex >= this.list.length - 1) {
      this.#resetIndex();
      return;
    }
    this.nextIndex = this.nextIndex + 1;
    this.prevIndex =
      this.nextIndex - 2 === -1 ? this.list.length - 1 : this.nextIndex - 2;
  }

  #movePrev(): void {
    if (this.prevIndex <= 0) {
      this.#resetIndex();
      return;
    }
    this.prevIndex = this.prevIndex - 1;
    this.nextIndex =
      this.prevIndex + 2 === this.list.length ? 0 : this.prevIndex + 2;
  }

  #resetIndex(): void {
    this.prevIndex = this.list.length - 1;
    this.nextIndex = 0;
  }

  #addFocus(target: HTMLAnchorElement): void {
    target.focus();
  }
}
