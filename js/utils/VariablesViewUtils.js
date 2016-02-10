/**
 * Returns true if the descriptor represents an undefined, null or
 * primitive value.
 *
 * @param object aDescriptor
 *        The variable's descriptor.
 */
export function isPrimitive(aDescriptor) {
  // For accessor property descriptors, the getter and setter need to be
  // contained in 'get' and 'set' properties.
  let getter = aDescriptor.get;
  let setter = aDescriptor.set;
  if (getter || setter) {
    return false;
  }

  // As described in the remote debugger protocol, the value grip
  // must be contained in a 'value' property.
  let grip = aDescriptor.value;
  if (typeof grip != "object") {
    return true;
  }

  // For convenience, undefined, null, Infinity, -Infinity, NaN, -0, and long
  // strings are considered types.
  let type = grip.type;
  if (type == "undefined" ||
      type == "null" ||
      type == "Infinity" ||
      type == "-Infinity" ||
      type == "NaN" ||
      type == "-0" ||
      type == "symbol" ||
      type == "longString") {
    return true;
  }

  return false;
};

/**
 * Returns a custom formatted property string for a grip.
 *
 * @param any aGrip
 *        @see Variable.setGrip
 * @param object aOptions
 *        Options:
 *        - concise: boolean that tells you want a concisely formatted string.
 *        - noStringQuotes: boolean that tells to not quote strings.
 *        - noEllipsis: boolean that tells to not add an ellipsis after the
 *        initial text of a longString.
 * @return string
 *         The formatted property string.
 */
export function getString(aGrip, aOptions = {}) {
  if (aGrip && typeof aGrip == "object") {
    switch (aGrip.type) {
      case "undefined":
      case "null":
      case "NaN":
      case "Infinity":
      case "-Infinity":
      case "-0":
        return aGrip.type;
      default:
        let stringifier = stringifiers.byType[aGrip.type];
        if (stringifier) {
          let result = stringifier(aGrip, aOptions);
          if (result != null) {
            return result;
          }
        }

        if (aGrip.displayString) {
          return getString(aGrip.displayString, aOptions);
        }

        if (aGrip.type == "object" && aOptions.concise) {
          return aGrip.class;
        }

        return "[" + aGrip.type + " " + aGrip.class + "]";
    }
  }

  switch (typeof aGrip) {
    case "string":
      return stringifiers.byType.string(aGrip, aOptions);
    case "boolean":
      return aGrip ? "true" : "false";
    case "number":
      if (!aGrip && 1 / aGrip === -Infinity) {
        return "-0";
      }
    default:
      return aGrip + "";
  }
};


/**
 * The VariablesView stringifiers are used by VariablesView.getString(). These
 * are organized by object type, object class and by object actor preview kind.
 * Some objects share identical ways for previews, for example Arrays, Sets and
 * NodeLists.
 *
 * Any stringifier function must return a string. If null is returned, * then
 * the default stringifier will be used. When invoked, the stringifier is
 * given the same two arguments as those given to VariablesView.getString().
 */
const stringifiers = {
  // @TODO Add the other stringifiers as necessary.
  byType: {
    string: function(aGrip, {noStringQuotes}) {
      if (noStringQuotes) {
        return aGrip;
      }
      return '"' + aGrip + '"';
    },

    longString: function({initial}, {noStringQuotes, noEllipsis}) {
      let ellipsis = noEllipsis ? "" : Scope.ellipsis;
      if (noStringQuotes) {
        return initial + ellipsis;
      }
      let result = '"' + initial + '"';
      if (!ellipsis) {
        return result;
      }
      return result.substr(0, result.length - 1) + ellipsis + '"';
    },

    object: function(aGrip, aOptions) {
      let {preview} = aGrip;
      let stringifier;
      if (aGrip.class) {
        stringifier = VariablesView.stringifiers.byObjectClass[aGrip.class];
      }
      if (!stringifier && preview && preview.kind) {
        stringifier = VariablesView.stringifiers.byObjectKind[preview.kind];
      }
      if (stringifier) {
        return stringifier(aGrip, aOptions);
      }
      return null;
    },

    symbol: function(aGrip, aOptions) {
      const name = aGrip.name || "";
      return "Symbol(" + name + ")";
    }
  }
}
