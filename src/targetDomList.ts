export class TargetDomList {
  list: HTMLElement[];
  prevIndex: number;
  currentIndex: number | undefined;
  nextIndex: number;

  constructor(list: HTMLElement[]) {
    this.list = list;
    this.prevIndex = this.list.length - 1;
    this.currentIndex = undefined;
    this.nextIndex = 0;
  }

  next(): void {
    const newTargetDom = this.list[this.nextIndex];
    this.#addFocus(newTargetDom);
    this.#moveNext();
  }

  prev(): void {
    const newTargetDom = this.list[this.prevIndex];
    this.#addFocus(newTargetDom);
    this.#movePrev();
  }

  #moveNext(): void {
    this.currentIndex = this.nextIndex;
    if (this.#isOutOfRange()) return;
    this.nextIndex = this.nextIndex + 1;
    this.prevIndex = this.nextIndex - 2;
  }

  #movePrev(): void {
    this.currentIndex = this.prevIndex;
    if (this.#isOutOfRange()) return;
    this.prevIndex = this.prevIndex - 1;
    this.nextIndex = this.prevIndex + 2;
  }

  #isOutOfRange(): boolean {
    if (this.currentIndex === 0) {
      this.#setIndexForfirstFocus();
      return true;
    }
    if (this.currentIndex === this.list.length - 1) {
      this.#setIndexForLastFocus();
      return true;
    }

    return false;
  }

  #setIndexForfirstFocus(): void {
    this.prevIndex = this.list.length - 1;
    this.nextIndex = 1;
  }

  #setIndexForLastFocus(): void {
    this.prevIndex = this.list.length - 2;
    this.nextIndex = 0;
  }

  #addFocus(target: HTMLElement): void {
    target.focus();
  }
}
