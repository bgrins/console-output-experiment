import { MESSAGE_ADD, MESSAGES_CLEAR, MESSAGES_SEARCH } from '../constants/AppConstants';

export function messageAdd(message) {
  return { type: MESSAGE_ADD, message };
}

export function messageClear() {
  return { type: MESSAGES_CLEAR };
}

export function messagesSearch(text) {
  return { type: MESSAGES_SEARCH, text };
}
