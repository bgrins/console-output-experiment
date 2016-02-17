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
      // The timestamp isn't attached to the 'result' portion of the packet,
      // and also it's all lower case from this packet for whatever reason.
      message.timeStamp = packet.timestamp;
      break;
    case "ConsoleService":
      message = packet.pageError;
      break;
  }

  message.messageType = messageType;
  return message
}
