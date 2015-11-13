import { applyMiddleware, createStore, compose } from 'redux';
import instance from './';
import router from './router';
import reducers from 'modules';

export default function configureStore(initialState) {
  let createStoreWithMiddleware = null;
  let middlewares = [require('redux-thunk')];

  if ( _DEV_ ) {
    const DevTools = require('redux-devtools');

    createStoreWithMiddleware = compose(
      applyMiddleware.apply(
        null,
        middlewares.concat([require('redux-logger')()])
      ),
      router,
      DevTools.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware.apply(null, middlewares),
      router
    );
  }

  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(reducers, initialState);

  instance.set(store);

  return store;
};
