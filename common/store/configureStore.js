import { applyMiddleware, createStore, compose } from 'redux';
import instance from './';
import router from './router';
import reducers from 'modules';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  let createStoreWithMiddleware = null;

  if ( _DEV_ ) {
    const DevTools = require('redux-devtools');

    createStoreWithMiddleware = compose(
      applyMiddleware.apply(thunk),
      router,
      DevTools.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
      router
    );
  }

  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(reducers, initialState);

  instance.set(store);

  return store;
};
