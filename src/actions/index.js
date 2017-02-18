export const FETCH_PHOTO = 'FETCH_PHOTO';
export const FETCH_CAT = 'FETCH_CAT';

import myData from './data.json';

const data = myData;


export function fetchPhoto(photoid) {

  return {
    type: FETCH_PHOTO,
    payload: photoid
  };
}

export function fetchCat() {

  return {
    type: FETCH_CAT,
    payload: data
  };
}
