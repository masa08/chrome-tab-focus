import { TargetDomList } from './targetList';

const searchResults = document.getElementsByClassName('yuRUbf');
const targetDomList = new TargetDomList(searchResults);

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
