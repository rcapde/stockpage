import { FETCH_CAT } from '../actions/index';

const INITIAL_STATE = { data: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CAT:
    return  {  ...state, data: action.payload};
  default:
    return state;
  }
}
