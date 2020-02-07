import React from 'react'
import ReactDOM from 'react-dom'
import RobotList from './RobotList'
import Robot from './Robot'
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it ('renders a list of robots for no filters', () => {
	const component = mount(<RobotList />)
	let nameInput = component.find('#nameFilter').first()
	nameInput.simulate('focus')
	nameInput.simulate('change', { target: { name : 'nameFilter', value: '' } })
	let typeInput = component.find('#typeFilter').first()
	typeInput.simulate('focus')
	typeInput.simulate('change', { target: {name : 'typeFilter', value: '' } })
	expect(component.find(Robot).length).toEqual(4)	
})

it ('renders a list based on a name filter', () => {
	const component = mount(<RobotList />)
	let nameInput = component.find('#nameFilter').first()
	nameInput.simulate('focus')
	nameInput.simulate('change', { target: { name : 'nameFilter', value: 'im' } })
	let typeInput = component.find('#typeFilter').first()
	typeInput.simulate('focus')
	typeInput.simulate('change', { target: {name : 'typeFilter', value: '' } })
	expect(component.find(Robot).length).toEqual(2)	
})

it ('renders a list based on a type filter', () => {
	const component = mount(<RobotList />)
	let nameInput = component.find('#nameFilter').first()
	nameInput.simulate('focus')
	nameInput.simulate('change', { target: { name : 'nameFilter', value: '' } })
	let typeInput = component.find('#typeFilter').first()
	typeInput.simulate('focus')
	typeInput.simulate('change', { target: {name : 'typeFilter', value: 'work' } })
	expect(component.find(Robot).length).toEqual(2)	
})

it ('renders a list based on both filters', () => {
	const component = mount(<RobotList />)
	let nameInput = component.find('#nameFilter').first()
	nameInput.simulate('focus')
	nameInput.simulate('change', { target: { name : 'nameFilter', value: 'im' } })
	let typeInput = component.find('#typeFilter').first()
	typeInput.simulate('focus')
	typeInput.simulate('change', { target: {name : 'typeFilter', value: 'worker' } })
	expect(component.find(Robot).length).toEqual(1)	
})