import { targetDomListFactory } from './targetDomListFactory';

const targetDomList = targetDomListFactory();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && e.shiftKey) {
    e.preventDefault();

    targetDomList.prev();
    return;
  }
  if (e.key === 'Tab') {
    e.preventDefault();

    targetDomList.next();
    return;
  }
});
