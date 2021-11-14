const searchResults = document.getElementsByClassName('yuRUbf');
let nextTargetIndex = 0;
let prevTargetIndex = searchResults.length;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && e.shiftKey) {
    e.preventDefault();

    if (prevTargetIndex === -1) {
      prevTargetIndex = searchResults.length - 1;
      nextTargetIndex = 0;
    }

    // focus処理
    const newTarget = getTargetElement(searchResults, prevTargetIndex);
    focusTargetHTMLElement(newTarget);

    // prevIndexを減算
    prevTargetIndex = prevTargetIndex - 1;
    nextTargetIndex = prevTargetIndex + 2;
    return;
  }
  if (e.key === 'Tab') {
    e.preventDefault();

    if (nextTargetIndex === searchResults.length) nextTargetIndex = 0;

    // focus処理
    const newTarget = getTargetElement(searchResults, nextTargetIndex);
    focusTargetHTMLElement(newTarget);

    // indexを加算
    nextTargetIndex = nextTargetIndex + 1;
    prevTargetIndex = nextTargetIndex - 2;
    return;
  }
});

const getTargetElement = (arr, index) => {
  return arr[index].getElementsByTagName('a')[0];
};

const focusTargetHTMLElement = (target) => {
  target.setAttribute('class', 'focus-visible');
  target.focus();
};
