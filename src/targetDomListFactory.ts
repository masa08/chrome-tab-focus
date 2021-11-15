import {
  NEXT_BUTTON_CLASS,
  PREV_BUTTON_CLASS,
  SEARCH_RESULT_CLASS,
} from './constants';
import { TargetDomList } from './targetList';

export const targetDomListFactory = () => {
  const searchResults = document.getElementsByClassName(SEARCH_RESULT_CLASS);
  let targetDomListRaw: HTMLAnchorElement[] = [];
  for (let i = 0; i < searchResults.length; i++) {
    targetDomListRaw.push(searchResults[i].getElementsByTagName('a')[0]);
  }

  const prevPageLink = document.getElementById(
    PREV_BUTTON_CLASS
  ) as HTMLAnchorElement;
  const nextPageLink = document.getElementById(
    NEXT_BUTTON_CLASS
  ) as HTMLAnchorElement;
  if (prevPageLink) targetDomListRaw.push(prevPageLink);
  if (nextPageLink) targetDomListRaw.push(nextPageLink);

  return new TargetDomList(targetDomListRaw);
};
