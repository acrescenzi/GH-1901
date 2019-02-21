
import React, {Component} from 'react';

// exporting the constructor function (dumb component).

class Article extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.dragonRider.title }</h1>
        <p>{ this.props.dragonRider.content }</p>
      </div>
    );
  }
}

export default Article
