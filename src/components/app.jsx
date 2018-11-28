import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "bbB45UPcelAL9qUVsl",
    };
  }

  search = (query) => {
    giphy({
      https: true,
      apiKey: 'GjWVY0tXGTjpB6F2hhbPaxe1Yh3Jv2xl'
    }).search({
      q: query,
      limit: 10,
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  displayGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} displayGif={this.displayGif} />
        </div>
      </div>
    );
  }
}

export default App;
