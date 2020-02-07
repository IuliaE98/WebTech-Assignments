import React from 'react';
 import AddDevice from './AddDevice.js';

class DeviceList extends React.Component {
    constructor(){
        super();
        this.state = {
            devices: []
        };

    }
    
  
    render(){
        return (
            <div>
            <AddDevice/>
            </div>
        )
    }
}

export default DeviceList;