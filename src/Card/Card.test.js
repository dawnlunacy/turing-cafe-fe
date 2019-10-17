import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should return a card display the correct reservation informatino', () => {
    const wrapper = shallow(
      <Card />
    )
    expect(wrapper).toMatchSnapshot();
  })
})