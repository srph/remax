import 'babel-polyfill';
import '../common/utils/bootstrap';
import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import configureStore from '../common/store/configureStore';
import Root from '../common/views/Root';

const store = configureStore(window.__INITIAL_STATE__);
const node = <Root history={hashHistory} store={store} />;
const $target = document.getElementById('mount');

render(node, $target);
