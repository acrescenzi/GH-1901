import React, {Component} from 'react';
import axios from 'axios';
import {Switch, Link, Route} from 'React-Router-DOM';

import ItemContainer from './itemContainer';

export default class extends Component {
	constructor() {
		super();
		this.state = {
			sauces : [],
			books : [],
		}
	}

	componentDidMount() {
		axios.get('/api/products')
		.then(res => {
			const {sauces, books} = res.data
			this.setState({sauces, books})
		})
	}

	render() {
		let adjs = ['Saucey', 'Smart']
		let random = Math.round(Math.random());
		let adj = adjs[random]
		return (
			<div>
				<h1>Get {adj}!</h1>
				<nav>
					<Link to="/books">
						<button className="btn">Books</button>
					</Link>
					<Link to="/sauces">
						<button className="btn">Sauces</button>
					</Link>
				</nav>
				<Switch>
					<Route path="/books" render={() => <ItemContainer items={this.state.books} className="item-container"/>} />
					<Route path="/sauces" render={() => <ItemContainer items={this.state.sauces} className="item-container"/>} />
				</Switch>
			</div>
		)
	}
}