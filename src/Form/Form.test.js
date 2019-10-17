import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('should be a form that allows users to make a new reservation', () => {
      const mockHandleSubmit = jest.fn()
    const wrapper = shallow(
      <Form handleSubmit={mockHandleSubmit}/>
    )
   const mockEvent = {
       target: {
        name: "name",
        value: "Lacy"
       }
   }
   const mockData = { 
    id: 123,
    name: "Lacy",
    date: "05/02",
    time: "7:00",
    number: "8"
}
   
   wrapper.instance().handleChange(mockEvent);

   expect(wrapper.state('name')).toEqual("Lacy");
  })
})