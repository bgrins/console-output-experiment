import expect from 'expect';
import reducer, { getRepeatId } from '../../js/reducers/messages';
import { prepareMessageInput } from "../../js/utils/MessageDispatcherUtils";
import data from "../data/ConsoleGeneric";
import * as constants from '../../js/constants/AppConstants';

const message = prepareMessageInput("ConsoleGeneric", data.get("console API call").responsePacket);
const initialState = reducer(undefined, {
  type: constants.MESSAGE_ADD,
  message
});
const expectedMessage = Object.assign({}, message, {repeatId: getRepeatId(message)});

describe('Message reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle the MESSAGE_ADD action', () => {
    const result = reducer(undefined, {
      type: constants.MESSAGE_ADD,
      message
    });

    expect(result).toEqual([expectedMessage]);
  });

  it('should handle repeated messages', () => {
    const newMessage = Object.assign({}, message, {});
    const repeatedMessage = Object.assign({}, expectedMessage, {repeats: 2});

    expect(
      reducer(initialState, {
        type: constants.MESSAGE_ADD,
        message: newMessage
      })
    ).toEqual([repeatedMessage]);
  });

  it('should not handle messages with different arguments as repeats', () => {
    const newMessage = Object.assign({}, message, {
      arguments: ["not the original argument"]
    });

    expect(
      reducer(initialState, {
        type: constants.MESSAGE_ADD,
        message: newMessage
      }).length
    ).toEqual(2);
  });

  it('should not handle messages with different line numbers as repeats', () => {
    const newMessage = Object.assign({}, message, {
      filename: "file:///not-original-file.html",
    });

    expect(
      reducer(initialState, {
        type: constants.MESSAGE_ADD,
        message: newMessage
      }).length
    ).toEqual(2);
  });

  it('should not handle messages with different severities as repeats', () => {
    const newMessage = Object.assign({}, message, {
      level: "error",
    });

    expect(
      reducer(initialState, {
        type: constants.MESSAGE_ADD,
        message: newMessage
      }).length
    ).toEqual(2);
  });

  it('should not combine different falsy values', () => {
    const nan = Object.assign({}, message, { arguments: [ NaN ] });
    const und = Object.assign({}, message, { arguments: [ undefined ] });
    const nul = Object.assign({}, message, { arguments: [ null ] });

    const firstState = reducer(undefined, {
      type: constants.MESSAGE_ADD,
      message: nan
    });

    const secondState = reducer(firstState, {
      type: constants.MESSAGE_ADD,
      message: und
    });

    expect(
      reducer(secondState, {
        type: constants.MESSAGE_ADD,
        message: nul
      }).length
    ).toEqual(3);
  });
});
