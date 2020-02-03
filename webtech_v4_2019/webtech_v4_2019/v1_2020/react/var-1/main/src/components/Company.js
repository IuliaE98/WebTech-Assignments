import React, { Component } from 'react'

class Company extends Component {
	constructor(props){
		super(props)
		let {item} = this.props
		this.state = {
			name : item.name,
			employees : item.employees,
			revenue : item.revenue,
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
        <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
						<input type="text" id="employees" name="employees" onChange={this.handleChange} value={this.state.employee} />
						<input type="text" id="revenue" name="revenue" onChange={this.handleChange} value={this.state.revenue} />
          <input type="button" value="save" id="save" onClick={() => {
							this.props.onSave(item.id, {
								name : this.state.name,
								employee : this.state.employee,
								revenue : this.state.revenue
							})
							this.setState({isEditing : false})
							}
						} />
          <input type="button" value="cancel" id="cancel" onClick={() => this.setState({isEditing : false})} />						
        </div>
      )
    }
    else{
      return (
        <div>
          Name {item.name} with {item.employees} employees {item.revenue} revenue
          <input type="button" value="edit" onClick={() => this.setState({isEditing : true})}/>  
        </div>
      )
    }
  }
}

export default Company
