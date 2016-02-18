import { MESSAGE_ADD, MESSAGE_CLEAR } from '../constants/AppConstants';

const initialState = {
  messages: []
};

function homeReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case MESSAGE_ADD:
      const messages = state.messages;
      messages.push(action.message);
      return Object.assign({}, state, {
        messages: removeRepeats(messages)
      });
    case MESSAGE_CLEAR:
      return Object.assign({}, state, { messages: [] });
    default:
      return state;
  }
}

// Any subsequent duplicate messages should be marked as 'repeated'
// and removed from the array, so a badge can display next to it instead
// of repeating the messages in the output.
// Note that only certain message types allow repeating.
function removeRepeats(messages) {
  let lastRepeatID = null;
  let lastRepeatedMessage = null;

  messages.forEach((message, i) => {
    // Only try to repeat messages that support this feature
    if (!message.allowRepeating) {
      lastRepeatedMessage = lastRepeatID = null;
      return;
    }

    // We could be explicit about what we care about in the repeat ID,
    // or we could just stringify the entire message (sans-timestamp).
    // Choosing this approach for now because it feels like it'd have less
    // false-positive repeats.
    if (!message._repeatID) {
      let clonedMessage = JSON.parse(JSON.stringify(message));
      delete clonedMessage.timeStamp;
      message._repeatID = JSON.stringify(clonedMessage);
    }

    // Alternatively, here is the explicit approach:
    // message._repeatID = message._repeatID || JSON.stringify({
    //   category: message.category,
    //   severity: message.severity,
    //   prefix: message.prefix,
    //   private: message.private,
    //   location: message.location,
    //   arguments: message.arguments,
    // });

    if (message._repeatID === lastRepeatID) {
      if (!lastRepeatedMessage.repeats) {
        lastRepeatedMessage.repeats = 2;
      } else {
        lastRepeatedMessage.repeats++;
      }

      messages[i] = null;
    } else {
      lastRepeatedMessage = message;
      lastRepeatID = message._repeatID;
    }
  });

  return messages.filter(m => m);
}

export default homeReducer;
