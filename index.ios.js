// Index.ios.js

// Import a library to help create a component
import React from 'react'; // imports React library
import { AppRegistry, View } from 'react-native'; // imports ReactNative library
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
// albums because that is the name of our project
// React vs ReactNative
// ES6 == new version of javascript


// whenever you pass data from parent to child, we use props
