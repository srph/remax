import {applyMiddleware, createStore, compose} from 'redux';
import reducers from 'app/modules';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk);
const finalCreateStore = createStoreWithMiddleware(createStore);
const store = finalCreateStore(reducers);
export default store;
