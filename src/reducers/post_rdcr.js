import { FETCH_POST } from '../actions/index';

const INITIAL_STATE = { data: posts };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_POST:
    return  {  ...state, data: posts};

  default:
    return state;
  }


  return state;
}

const posts = [
  {
    id:'1',
    text:'Contingut post 1',
  },
  {
    id:'2',
    text:'Contingut post 2',
  },
  {
    id:'3',
    text:'Contingut post 3',
  },
  {
    id:'4',
    text:'Contingut post 4',
  },
  {
    id:'5',
    text:'Contingut post 5',
  },
  {
    id:'6',
    text:'Contingut post 6',
  },
  {
    id:'7',
    text:'Contingut post 7',
  },
  {
    id:'8',
    text:'Contingut post 8',
  },
  {
    id:'9',
    text:'Contingut post 9',
  },
]
