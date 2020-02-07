import React, { Component } from 'react'

class RobotForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			type : '',
			name : '',
			mass : ''
		}
		this.handleChange = (evt) => {
			this.setState({
				[evt.target.name] : evt.target.value
			})
		}
	}
	render() {
		return (
			<div>
				<label htmlFor="type">Type</label>
				<input type="text" id="type" name="type" onChange={this.handleChange} />
				<label htmlFor="name">Name</label>
				<input type="name" id="name" name="name" onChange={this.handleChange} />
				<label htmlFor="mass">Mass</label>
				<input type="text" id="mass" name="mass" onChange={this.handleChange} />
				<input type="button" value="add" onClick={() => this.props.onAdd({
					name : this.state.name,
					type : this.state.type,
					mass : this.state.mass
				})} />
			</div>
		)
	}
}

export default RobotForm
