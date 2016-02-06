import expect from 'expect';
import { messageAdd } from '../js/actions/AppActions';
import { MESSAGE_ADD } from '../js/constants/AppConstants';

// Test actions from AppActions.js
describe('AppActions', () => {
  describe('messageAdd', () => {
    it('should create a message action', () => {
      const message = 'samsmith';
      const expectedResult = {
        type: MESSAGE_ADD,
        message
      };

      expect(messageAdd(message)).toEqual(expectedResult);
    });
  });
});
