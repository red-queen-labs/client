import { combineReducers } from 'redux';
import alerts from './reducers/alert';
import user from './reducers/user';

const rootReducer = combineReducers({
  alerts,
  user,
});

export default rootReducer;
