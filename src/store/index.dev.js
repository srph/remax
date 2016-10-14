import {applyMiddleware, createStore, compose} from 'redux';
import reducers from 'app/modules';
import thunk from 'redux-thunk';
import DevTools from 'app/components/DevTools';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
);
const finalCreateStore = createStoreWithMiddleware(createStore);
const store = finalCreateStore(reducers);
export default store;
