import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import auth from './auth';

export default combineReducers({
  auth,
  router
});
