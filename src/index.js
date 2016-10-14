// ==================================================
// Main Client File
// ==================================================
// This file imports the bootstrap file, runs the
// boilerplate required to initialize the application
// ==================================================

import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';

const node = <Root />;
const $target = document.getElementById('mount');
ReactDOM.render(node, $target);
