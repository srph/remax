import 'babel-polyfill';
import './utils/bootstrap';
import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import configureStore from './store/configureStore';
import Root from './views/Root';

const store = configureStore();
const node = <Root history={hashHistory} store={store} />;
const $target = document.getElementById('mount');

render(node, $target);
