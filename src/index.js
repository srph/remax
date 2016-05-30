import 'babel-polyfill';
import './bootstrap';
import React from 'react';
import {render} from 'react-dom';
import history from './history';
import configureStore from './store/configureStore';
import Root from './views/Root';

const store = configureStore();
const node = <Root history={history} store={store} />;
const $target = document.getElementById('mount');

render(node, $target);
