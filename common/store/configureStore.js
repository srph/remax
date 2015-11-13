import { applyMiddleware, createStore, compose } from 'redux';
import instance from './';
import router from './router';
import reducers from 'app-reducers';

export default function configureStore(initialState) {
  const middlewares = [require('redux-thunk')];

  const store = compose(
    applyMiddleware.apply(
      null,
      __PRODUCTION__
        ? middlewares
        : middlewares.concat([require('redux-logger')()])
    ),
    router
  )(createStore)(reducers, initialState);

  instance.set(store);

  return store;
};
