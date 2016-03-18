import expect from 'expect';
import reducer from '../../js/reducers/messages';
import { prepareMessageInput } from "../../js/utils/MessageDispatcherUtils";
import data from "../data/ConsoleGeneric";
import * as constants from '../../js/constants/AppConstants';

const message = prepareMessageInput("ConsoleGeneric", data.get("console API call").responsePacket);

describe('Message reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle the MESSAGE_ADD action', () => {
    expect(
      reducer(undefined, {
        type: constants.MESSAGE_ADD,
        message
      })
    ).toEqual([message]);
  });

  it('should handle repeated messages', () => {
    const initialState = [message];
    const repeatedMessage = Object.assign({}, message, {repeats: 2});

    expect(
      reducer(initialState, {
        type: constants.MESSAGE_ADD,
        message
      })
    ).toEqual([repeatedMessage]);
  });
});
