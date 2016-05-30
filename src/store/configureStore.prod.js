import {applyMiddleware, createStore, compose} from 'redux';
import instance from './';
import reducers from '../modules';
import thunk from 'redux-thunk';

/**
 * @param {object} initialState
 */
export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(thunk);
  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(reducers);

  instance.set(store);

  return store;
};
