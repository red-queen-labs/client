import { combineReducers } from 'redux';
import alerts from './reducers/alert';
import user from './reducers/user';
import profile from './reducers/profile';
// import buildings from './reducers/buildings';

const rootReducer = combineReducers({
  alerts,
  profile,
  user,
  // buildings,
});

export default rootReducer;
