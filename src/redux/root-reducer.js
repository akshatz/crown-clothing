import { combineReducers } from 'redux';

import userReducer from './user/user.reduer.jsx';

export default combineReducers({
  user: userReducer
});