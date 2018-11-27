import React, { Component } from 'react';

class Gif extends Component {


  render() {
    const src = "https://media.giphy.com/media/lyxZEKUSpYeMU/giphy.gif"
    return(
      <div>
        <img src={src} alt="" className="gif"/>
      </div>
    );
  }
}

export default Gif;
