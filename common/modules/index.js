import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import counter from './counter';

export default combineReducers({
  counter,
  router
});
