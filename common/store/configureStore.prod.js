import {applyMiddleware, createStore, compose} from 'redux';
import instance from './';
import reducers from '../modules';
import thunk from 'redux-thunk';
import {syncHistory} from 'redux-simple-router';

/**
 * @param {object} initialState
 * @param {object} drivers Used to inject dependencies
 * @param {object} drivers.history History instance
 */
export default function configureStore(initialState, {history}) {
  const reduxRouterMiddleware = syncHistory(history);
  const createStoreWithMiddleware = applyMiddleware(
    thunk,
    reduxRouterMiddleware
  );
  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(reducers, initialState);

  instance.set(store);

  return store;
};
