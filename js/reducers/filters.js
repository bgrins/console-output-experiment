import { MESSAGES_FILTER, MESSAGES_FILTER_CLEAR } from '../constants/AppConstants';

// @TODO: Set initial state based on Services.prefs value for severity filters
//        Set current pref based on changed severity filters

function filters(state = {}, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  let newState = Object.assign({}, state);

  switch (action.type) {
    case MESSAGES_FILTER_CLEAR:
      newState.filterText = "";
      newState.filterSeverity = "";
      return newState;
    case MESSAGES_FILTER:
      if (action.filterText !== undefined) {
        newState.filterText = action.filterText;
      }
      if (action.filterSeverity !== undefined) {
        newState.filterSeverity = action.filterSeverity;
      }
      return newState;
    default:
      return state;
  }
}

export default filters;
