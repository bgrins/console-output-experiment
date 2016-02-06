import expect from 'expect';
import homeReducer from '../js/reducers/homeReducer';
import * as constants from '../js/constants/AppConstants';

// Test Reducer
describe('defaultReducer', () => {
  // Test that the initial state is returning correctly
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      messages: []
    });
  });

  // Test that it handles changing the owner correctly
  it('should handle the MESSAGE_ADD action', () => {
    const message = 'samsmith';

    expect(
      homeReducer(undefined, {
        type: constants.MESSAGE_ADD,
        message
      })
    ).toEqual({
      messages: [message]
    });
  });
});
