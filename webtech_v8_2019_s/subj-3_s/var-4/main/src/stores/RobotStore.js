import {EventEmitter} from 'fbemitter'

class RobotStore{
	constructor(){
		this.robots = [{
			id : 1,
			type : 'worker',
			name : 'tim',
			mass : 1000
		},{
			id : 2,
			type : 'worker',
			name : 'tom',
			mass : 1500
		},
		{
			id : 3,
			type : 'administrator',
			name : 'jim',
			mass : 1500
		},
		{
			id : 4,
			type : 'administrator',
			name : 'john',
			mass : 1500
		}]
		this.emitter = new EventEmitter()
	}
	getRobots(){
		return this.robots
	}
}

export default RobotStore