import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  it('should return reservations cards matching snapshot', () => {
    const mockReservations = [
        {
            "id": 1,
            "name": "Christie",
            "date": "12/29",
            "time": "7:00",
            "number": 12
        },
        {
            "id": 2,
            "name": "Leta",
            "date": "4/5",
            "time": "7:00",
            "number": 2
        },
        {
            "id": 3,
            "name": "Pam",
            "date": "1/21",
            "time": "6:00",
            "number": 4
        }]
    const wrapper = shallow(
      <CardContainer reservations={mockReservations}/>
    )
    
    expect(wrapper).toMatchSnapshot();
  })
})