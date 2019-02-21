import React, {Component} from 'react';

import ItemPic from './itemPic';


export default class extends Component {
	constructor(){
		super()
		this.state = {
			selected : ''
		}
		this.handleChange = this.handleChange.bind(this)

	}

	handleChange(e) {

		this.setState({
			selected: e.target.value
		})
	}

	render() {
		return(
			<div>
				<div>
					{
						this.state.selected ? <ItemPic sauce={this.state.selected}/> : 'Choose Already!'
					}
				</div>	
				<br />
				<label>
					Select a Sauce!
					<br />
					<select onChange={this.handleChange}>
						<option></option>
						{
							this.props.items.map((sauce, i) => {
								return <option key={i} value={sauce}>{sauce}</option>
							})
						}
					</select>
				</label>
			</div>
		)
	}
}