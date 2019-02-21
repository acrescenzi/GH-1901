import React, {Component} from 'react';

import store, {btnClick} from './store'

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = store.getState();
	}

	componentDidMount(){
		this.unsub = store.subscribe(() => {
			this.setState(store.getState())
		})
	}

	componentWillUnmount() {
		this.unsub()
	}

	clicked(){
		store.dispatch(btnClick())
	}

	render() {
		return(
			<div>
				<h1>Bananas!!!</h1>
				<h3>Hits : {this.state.count}</h3>
				<button onClick={this.clicked}>Click Me!</button>
			</div>
		)
	}
}







