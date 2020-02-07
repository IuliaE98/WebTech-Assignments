import React from 'react';

class AddDevice extends React.Component {
    
    render() {
        return (
            <div>
         <input  id="name" onChange={this.handleChangeName} name="name" />
            <input  id="price" onChange={this.handleChangePrice} name="price"/>
             <button value="Subbmit" onClick={this.addItem}>Add product</button>
            </div>
        )
    }
}

export default AddDevice;