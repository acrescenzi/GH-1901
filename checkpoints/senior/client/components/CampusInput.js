/* eslint react/no-unused-state:0 */
import React, { Component } from 'react';

export default class CampusInput extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <input onChange={this.handleChange} />
    );
  }
}
