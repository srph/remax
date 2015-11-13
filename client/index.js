// Polyfill
import 'babel-polyfill';

// Bootsrapping
import 'utils/bootstrap';

import configureStore from 'store/configureStore';
const store = configureStore();

// React
import React from 'react';
import { render } from 'react-dom';

// We'll `require` instead of `import` because imported modules
// are hoisted to the topic when transpiled.
// That's OK, but we want configureStore to run first
// before getting this thing.
const Root = require('common/Root');

render(
  <Root store={store} />,
  document.getElementById('mount')
);
