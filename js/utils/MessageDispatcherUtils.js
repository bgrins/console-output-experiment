// Temporary utility. Once this is integrated back in the code base, this will
// likely live in different parts of the system.

// The various categories of messages.
const CATEGORY_NETWORK = 0;
const CATEGORY_CSS = 1;
const CATEGORY_JS = 2;
const CATEGORY_WEBDEV = 3;
const CATEGORY_INPUT = 4;
const CATEGORY_OUTPUT = 5;
const CATEGORY_SECURITY = 6;
const CATEGORY_SERVER = 7;

// The fragment of a CSS class name that identifies each category.
const CATEGORY_CLASS_FRAGMENTS = [
  "network",
  "cssparser",
  "exception",
  "console",
  "input",
  "output",
  "security",
  "server",
];

// The possible message severities.
const SEVERITY_ERROR = 0;
const SEVERITY_WARNING = 1;
const SEVERITY_INFO = 2;
const SEVERITY_LOG = 3;

// The fragment of a CSS class name that identifies each severity.
const SEVERITY_CLASS_FRAGMENTS = [
  "error",
  "warn",
  "info",
  "log",
];

// A mapping from the console API log event levels to the Web Console
// severities.
const LEVELS = {
  error: SEVERITY_ERROR,
  exception: SEVERITY_ERROR,
  assert: SEVERITY_ERROR,
  warn: SEVERITY_WARNING,
  info: SEVERITY_INFO,
  log: SEVERITY_LOG,
  trace: SEVERITY_LOG,
  table: SEVERITY_LOG,
  debug: SEVERITY_LOG,
  dir: SEVERITY_LOG,
  dirxml: SEVERITY_LOG,
  group: SEVERITY_LOG,
  groupCollapsed: SEVERITY_LOG,
  groupEnd: SEVERITY_LOG,
  time: SEVERITY_LOG,
  timeEnd: SEVERITY_LOG,
  count: SEVERITY_LOG
};

export function prepareMessageInput(messageType, packet) {
  let message;

  switch (messageType) {
    case "ConsoleGeneric":
      message = packet.message;
      message.severity = SEVERITY_CLASS_FRAGMENTS[LEVELS[message.level]];
      break;
    case "JavaScriptEvalOutput":
      message = packet.result;
      // The timestamp isn't attached to the 'result' portion of the packet,
      // and also it's all lower case from this packet for whatever reason.
      message.timeStamp = packet.timestamp;
      message.severity = "log";
      message.category = CATEGORY_CLASS_FRAGMENTS[CATEGORY_OUTPUT];
      break;
    case "ConsoleService":
      message = packet.pageError;
      // @TODO use proper severity for console service messages
      message.severity = "error";
      break;
  }

  message.messageType = messageType;
  return message
}
