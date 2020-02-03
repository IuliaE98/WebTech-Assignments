import React from 'react'
import ReactDOM from 'react-dom'
import CompanyList from '../components/CompanyList'
import Company from '../components/Company'
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it ('renders a list of companies with edit buttons', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	let button = company.find('[value="edit"]').first()
	expect(button.length).toEqual(1)	
})

it ('goes to edit mode upon clicking', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	let button = company.find('[value="edit"]').first()
	button.simulate('click')
	let inputs = component.find('[type="text"]')
	expect(inputs.length).toEqual(3)	
})

it ('can return to view mode', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	let button = company.find('[value="edit"]').first()
	button.simulate('click')
	button = component.find('[value="cancel"]').first()
	button.simulate('click')	
	let inputs = component.find('[type="text"]')
	expect(inputs.length).toEqual(0)	
})

it ('can save a company', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	let button = company.find('[value="edit"]').first()
	button.simulate('click')
	let nameInput = component.find('#name').first()
	nameInput.simulate('focus')
	nameInput.simulate('change', { target: { name : 'name', value: 'test_name' } })
	let employeesInput = component.find('#employees').first()
	employeesInput.simulate('focus')
	employeesInput.simulate('change', { target: {name : 'employees', value: 'test_employees' } })
	let revenueInput = component.find('#revenue').first()
	revenueInput.simulate('focus')
	revenueInput.simulate('change', { target: { name : 'revenue', value: 'test_revenue' } })
	button = component.find('[value="save"]').first()
	button.simulate('click')
	company = component.find(Company).first()
	expect(company.props().item).toEqual({id: 1, name : 'test_name', employees : 'test_employees', revenue: 'test_revenue'})	
})