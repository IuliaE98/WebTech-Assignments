import React, { Component } from 'react'

class CompanyDetails extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {item} = this.props
        return <div>
            I am the details for {item.name}
            <input type="button" value="cancel" onClick={() => this.props.onCancel()} />
        </div>
    }
}

export default CompanyDetails
