import { MESSAGE_ADD } from '../constants/AppConstants';

const initialState = {
  messages: []
};

function homeReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case MESSAGE_ADD:
      const messages = state.messages;
      messages.push(action.message);
      return Object.assign({}, state, { messages });
    default:
      return state;
  }
}

export default homeReducer;
