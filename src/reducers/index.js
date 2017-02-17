import { combineReducers } from 'redux';
import CatReducer from './cat_rdcr';

const rootReducer = combineReducers({
  imatges: CatReducer,
});

export default rootReducer;
