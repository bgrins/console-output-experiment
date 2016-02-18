import { MESSAGE_ADD, MESSAGE_CLEAR } from '../constants/AppConstants';

export function messageAdd(message) {
  return { type: MESSAGE_ADD, message };
}

export function messageClear() {
  return { type: MESSAGE_CLEAR };
}
