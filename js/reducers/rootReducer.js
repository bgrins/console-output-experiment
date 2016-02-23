/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import messages from './messages';
import filters from './filters';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ messages, filters })

export function getFilteredMessages(state) {
  let numHidden = 0;
  let filterText = state.filters.filterText;
  let filterSeverity = state.filters.filterSeverity;

  let newMessages = state.messages.slice(0).filter(message => {
    // @TODO implement a smarter search
    if (filterText && message.arguments) {
      if (!message.arguments.join("").includes(filterText)) {
        numHidden += message.repeats || 1;
        return false;
      }
    }

    if (filterSeverity && message.severity !== filterSeverity) {
      numHidden += message.repeats || 1;
      return false;
    }

    return true;
  });

  return {
    messages: newMessages,
    numHidden: numHidden
  };
}

export default rootReducer;
