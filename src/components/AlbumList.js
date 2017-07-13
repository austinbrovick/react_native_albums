import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] };
  // called the instance the app loads
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }


  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }


  render() {
    console.log(this.state);

    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}


export default AlbumList;


// lifecycle methods
// state is how react handles changes to the app
  // e.g. we have data or we don't
// setState already exists in all of our class based components
// this.state = {} never do this!! unless you're initializing

// props is for parent to child communication
// state is for components internal recording keeping
