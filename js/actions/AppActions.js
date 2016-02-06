import { MESSAGE_ADD } from '../constants/AppConstants';

export function messageAdd(message) {
  return { type: MESSAGE_ADD, message };
}
