import { applyMiddleware, createStore, compose } from 'redux';
import instance from './';
import reducers from 'modules';
import router from './router';
import thunk from 'redux-thunk';
import DevTools from 'components/DevTools';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    router,
    DevTools.instrument()
  );
  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(reducers, initialState);

  instance.set(store);

  return store;
};
