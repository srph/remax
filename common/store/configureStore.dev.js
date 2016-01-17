import {applyMiddleware, createStore, compose} from 'redux';
import instance from './';
import reducers from '../modules';
import thunk from 'redux-thunk';
import {syncHistory} from 'redux-simple-router';
import DevTools from '../components/DevTools';

/**
 * @param {object} initialState
 * @param {object} drivers Used to inject dependencies
 * @param {object} drivers.history History instance
 */
export default function configureStore(initialState, {history}) {
  const reduxRouterMiddleware = syncHistory(history);
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, reduxRouterMiddleware),
    DevTools.instrument()
  );
  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(reducers, initialState);

  // Required for redux-simple-router to replay actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  instance.set(store);

  return store;
};
