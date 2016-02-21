/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import messages from './messages';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ messages })

export default rootReducer;
