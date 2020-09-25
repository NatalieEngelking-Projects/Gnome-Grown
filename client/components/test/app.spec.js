import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../app.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should show text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div');
    expect(text.text()).toBe('Creation Station');
  })
})