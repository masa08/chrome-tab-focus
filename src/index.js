const searchResults = document.getElementsByClassName('yuRUbf');
let index = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    // 前回focus解除
    // const prevTarget = searchResults[index].getElementsByTagName('a')[0];
    // prevTarget.removeAttribute('class', 'focus-visible');

    if (index === searchResults.length) index = 0;

    // focus処理
    const newTarget = searchResults[index].getElementsByTagName('a')[0];
    newTarget.setAttribute('class', 'focus-visible');
    newTarget.focus();

    // indexを加算
    index = index + 1;
  }
});
