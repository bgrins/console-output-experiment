import { MESSAGE_ADD, MESSAGES_CLEAR, MESSAGES_FILTER, MESSAGES_FILTER_CLEAR } from '../constants/AppConstants';

export function messageAdd(message) {
  return { type: MESSAGE_ADD, message };
}

export function messageClear() {
  return { type: MESSAGES_CLEAR };
}

export function messagesFilter({filterText, filterSeverity}) {
  return { type: MESSAGES_FILTER, filterText, filterSeverity };
}

export function messagesFilterClear() {
  return { type: MESSAGES_FILTER_CLEAR };
}

