import React, {Component} from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'
import CompanyDetails from './CompanyDetails'

class CompanyList extends Component {
    constructor() {
        super()
        this.state = {
            companies: [],
            selected: null
        }

        this.select = (id) =>{
        	let selected = this.state.companies.find((e)=> e.id ===id)
			this.setState({
				selected: selected
			})
		}

		this.cancel = () => {
        	this.setState({
				selected:null
			})
		}

    }

    componentDidMount() {
        this.store = new CompanyStore()
        this.setState({
            companies: this.store.getAll()
        })
        this.store.emitter.addListener('UPDATE', () => {
            this.setState({
                companies: this.store.getAll()
            })
        })
    }

    render() {
        if (this.state.selected) {
        	return <CompanyDetails item={this.state.selected} onCancel={this.cancel}/>
        } else {
            return (
                <div>
                    {
                        this.state.companies.map((e, i) =>
                            <Company item={e} key={i} onSelect={this.select} />
                        )
                    }

                </div>
            )
        }
    }
}

export default CompanyList
