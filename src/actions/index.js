export const FETCH_POST = 'FETCH_POST';
export const FETCH_CAT = 'FETCH_CAT';

import myData from './data.json';

const data = myData;


export function fetchPost(postid) {

  return {
    type: FETCH_POST,
    payload: postid
  };
}

export function fetchCat() {

  return {
    type: FETCH_CAT,
    payload: data
  };
}
