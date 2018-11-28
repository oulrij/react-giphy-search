import React, { Component } from 'react';

class Gif extends Component {

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <div>
        <img src={src} alt="" className="gif"/>
      </div>
    );
  }
}

export default Gif;
