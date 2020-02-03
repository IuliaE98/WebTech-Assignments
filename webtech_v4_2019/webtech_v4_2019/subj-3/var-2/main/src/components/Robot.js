import React, { Component } from 'react'

class Robot extends Component {
	constructor(props){
		super(props)
		let {item} = this.props
		this.state = {
			name : item.name,
			type : item.type,
			mass : item.mass,
			isEditing : false
		}
		this.handleChange = (evt) => {
			this.setState({
				[evt.target.name] : evt.target.value
			})
		}
	}
  render() {
  	let {item} = this.props
  	if (this.state.isEditing){
  		return (
				<div>
						Hello, my name is 
						<input type="text" id="type" name="type" onChange={this.handleChange} value={this.state.type} />
						. I am a 
						<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
					 	and weigh 
						<input type="text" id="mass" name="mass" onChange={this.handleChange} value={this.state.mass} />
						<input type="button" value="save" onClick={() => {
							this.props.onSave(item.id, {
								name : this.state.name,
								type : this.state.type,
								mass : this.state.mass
							})
							this.setState({isEditing : false})
							}
						} />
		  			<input type="button" value="cancel" onClick={() => this.setState({isEditing : false})} />						
					</div>	    	
  		)
  	}
  	else{
  		return (
		      <div>
			  		Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
			  		<input type="button" value="edit" onClick={() => this.setState({isEditing : true})} />
		      </div>
  		)
  	}
  }
}

export default Robot
