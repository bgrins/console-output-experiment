import { MESSAGE_ADD, MESSAGES_CLEAR } from '../constants/AppConstants';

export default function messages(state = [], action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case MESSAGE_ADD:
      let newMessage = action.message;
      if (newMessage.allowRepeating) {
        newMessage.repeatId = getRepeatId(newMessage);
        if (state.length > 0) {
          let lastMessage = state[state.length - 1];

          // If the incoming message and the last message printed have the same
          // repeatId, that means the last message printed needs to be updated.
          // Because this is immutable, we need to clone the array and the last
          // printed message.
          if (lastMessage.repeatId === newMessage.repeatId) {
            let repeats = lastMessage.repeats ? lastMessage.repeats + 1 : 2;
            let newLast = Object.assign({}, state[state.length - 1], { repeats });
            return state.slice(0, state.length-1).concat(newLast);
          }
        }
      }
      return state.concat([ newMessage ]);
    case MESSAGES_CLEAR:
      return [];
    default:
      return state;
  }
}

export function getRepeatId(message) {
  // We could be explicit about what we care about in the repeat ID,
  // or we could just stringify the entire message (sans-timestamp).
  // Choosing this approach for now because it feels like it'd have less
  // false-positive repeats.
  let clonedMessage = JSON.parse(JSON.stringify(message));
  delete clonedMessage.timeStamp;
  delete clonedMessage.uniqueID;
  delete clonedMessage.repeatId;
  return JSON.stringify(clonedMessage);
}
