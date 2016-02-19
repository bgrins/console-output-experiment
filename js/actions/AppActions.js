import { MESSAGE_ADD, MESSAGES_CLEAR } from '../constants/AppConstants';

export function messageAdd(message) {
  return { type: MESSAGE_ADD, message };
}

export function messageClear() {
  return { type: MESSAGES_CLEAR };
}
