import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Date from '../Date';

describe('Date', () => {

  it('should render a valid Date', () => {
    const message = {
      preview: {
        timestamp: 448156800000
      }
    }

    const rendered = shallow(<Date message={message} />);
    expect(rendered.text()).toContain("Date 1984-03-15T00:00:00.000Z");
  });
});
