import { MESSAGE_ADD, MESSAGES_CLEAR, MESSAGES_FILTER } from '../constants/AppConstants';

export function messageAdd(message) {
  return { type: MESSAGE_ADD, message };
}

export function messageClear() {
  return { type: MESSAGES_CLEAR };
}

export function messagesFilter(filterText) {
  return { type: MESSAGES_FILTER, filterText};
}
