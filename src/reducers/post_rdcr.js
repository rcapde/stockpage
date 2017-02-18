import { FETCH_PHOTO } from '../actions/index';

const INITIAL_STATE = { data: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_PHOTO:
    return  {  ...state, data: action.payload.data};

  default:
    return state;
  }
}
