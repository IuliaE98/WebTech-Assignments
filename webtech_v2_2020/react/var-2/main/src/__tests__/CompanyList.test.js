import React from 'react'
import ReactDOM from 'react-dom'
import CompanyList from '../components/CompanyList'
import Company from '../components/Company'
import CompanyDetails from '../components/CompanyDetails'
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it ('renders a list of companies with select buttons', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	let button = company.find('[value="select"]').first()
	expect(button.length).toEqual(1)	
})

it ('valid props on company', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	expect(company.props().item).toEqual({"id": 1, "name": "acme inc", "employees": 100, "revenue": 1000})
	expect(typeof company.props().onSelect).toEqual('function')
})

it ('select a company', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	let button = company.find('[value="select"]').first()
	button.simulate('click')
	expect(component.find(CompanyDetails).length).toEqual(1)
	expect(component.find(Company).length).toEqual(0)	
})

it ('cancel selection', () => {
	const component = mount(<CompanyList />)
	let company = component.find(Company).first()
	let button = company.find('[value="select"]').first()
	button.simulate('click')
	button = component.find('[value="cancel"]').first()
	button.simulate('click')
	expect(component.find(CompanyDetails).length).toEqual(0)	
	expect(component.find(Company).length).toEqual(2)	
})

