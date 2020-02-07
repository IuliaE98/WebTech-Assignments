import React from 'react';
import ReactDOM from 'react-dom';


import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DeviceList  from './DeviceList';
import AddDevice from './AddDevice';

configure({ adapter: new Adapter() });

it('AddDevice component should be rendered', () => {
    const component = mount(<DeviceList />);
    expect(component.find(AddDevice).length).toEqual(1);
})


it('AddDevice should contain 2 inputs', () => {
    const component = mount(<AddDevice />);
    const nameInput = component.find('#name').first();
    const priceInput = component.find('#price').first();
    expect(nameInput.length + priceInput.length).toEqual(2);
})

it('AddDevice should contain a button to trigger addDevice method', () => {
    const component = mount(<AddDevice />);
    const button = component.find('button').first();
    expect(button.length).toEqual(1)
})

it('AddDevice should contain props onAdd', () => {
    const component = mount(<DeviceList />);
    let addForm = component.find(AddDevice).first();
    expect(typeof addForm.props().onAdd).toEqual('function');
})
it('onAdd should add a new device to DeviceList state', () => {
    const component = mount(<DeviceList />);
    const nameInput = component.find('#name').first();
    nameInput.simulate('focus');
    nameInput.simulate('change', { target: { value: 'Iphone X'} })
    const priceInput = component.find('#price').first();
    priceInput.simulate('focus');
    priceInput.simulate('change',{ target: { value: 4000 } });
    
    const addBtn = component.find('button').first();
    addBtn.simulate('click');
    expect(component.state().devices.length).toEqual(1)
    expect(component.state().devices[0].price).toEqual(4000);
    expect(component.state().devices[0].name).toEqual('Iphone X');
})