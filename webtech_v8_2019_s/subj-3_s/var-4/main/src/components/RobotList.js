import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'

// TODO: adăugați posibilitatea de a filtra roboții după name și type
// filtrarea se face pe baza a 2 text input-uri și se produce la fiecare tastă apăsată

// TODO: add the possiblity to filter robots according to name and type
// filtering is done via 2 text inputs and happens whenever a key is pressed

class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : [],
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.filterName= (evt) =>{
			var res = [];

			if(evt.target.value === ''){
				this.setState({
					robots : this.store.getRobots()
				})
			}
			else{
				this.state.robots.forEach(r =>{

				if(r.name.includes(evt.target.value)){
					
					var f = new Object();
					
					f.id = r.id
					f.type = r.type
					f.name = r.name
					f.mass = r.mass

					res.push(f);
				}
				})
				

				
				this.setState({
					robots: res
				})

			}
		}
		this.filterType= (evt) =>{
			
			var res = [];
			
			this.state.robots.forEach(r =>{

				if(r.type.includes(evt.target.value)){
					var f = {
						id: r.id,
						type: r.type,
						name: r.name,
						mass: r.mass
					}
					res.push(f);
				}
			})
				
			this.setState({
				robots: res
			})
			
		}
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}
	
	render() {
		return (
			<div>
				<input type="text" name="nameFilter" id="nameFilter" onChange={this.filterName} />
            	<input type="text" name="typeFilter" id="typeFilter" onChange={this.filterType} /> 
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList