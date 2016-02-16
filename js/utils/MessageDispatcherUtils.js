// Temporary utility. Once this is integrated back in the code base, this will
// likely live in different parts of the system.

export function prepareMessageInput(messageType, packet) {
  let message;

  switch (messageType) {
    case "ConsoleGeneric":
      message = packet.message
      break;
    case "JavaScriptEvalOutput":
      message = packet.result;
      break;
  }

  message.messageType = messageType;
  return message
}
