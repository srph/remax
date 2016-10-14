// ==================================================
// Redux Modules
// ==================================================
// This file exports all modules used in the Redux
// store singleton located in the `../store` folder`.
//
// The reason we're not placing this under the same
// directory is to keep all high-level files in
// a flat directory structure.
// ==================================================

import {combineReducers} from 'redux';
import counter from './counter';

export default combineReducers({
  counter
});
