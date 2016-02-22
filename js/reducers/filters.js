import { MESSAGES_FILTER } from '../constants/AppConstants';

// @TODO: Set initial state based on Services.prefs value for severity filters
//        Set current pref based on changed severity filters

function filters(state = {}, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!

  switch (action.type) {
    case MESSAGES_FILTER:
      let filterText = action.filterText;
      let newState = Object.assign({}, state, { filterText });
      return newState;
    default:
      return state;
  }
}

export default filters;
