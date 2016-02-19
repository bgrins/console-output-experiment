// Temporary utility. Once this is integrated back in the code base, this will
// likely live in different parts of the system.

export function prepareMessageInput(messageType, packet) {
  let message;

  switch (messageType) {
    case "ConsoleGeneric":
      message = packet.message;
      message.allowRepeating = true;
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

  // Clone the message (needed since our test data is exporting objects directly).
  // Won't be needed when actual RDP packets are coming in
  return JSON.parse(JSON.stringify(message))
}
