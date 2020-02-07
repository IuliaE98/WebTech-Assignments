import React, { Component } from 'react'

class Company extends Component {
  render() {
  	let {item} = this.props
    return (
      <div>
    		Name {item.name} with {item.employees} employees {item.revenue} revenue
          <input type="button" value="select" onClick={() => this.props.onSelect(this.props.item.id)} />

      </div>
    )
  }
}

export default Company
