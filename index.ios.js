// Index.ios.js

// Import a library to help create a component
import React from 'react'; // imports React library
import { AppRegistry } from 'react-native'; // imports ReactNative library
import Header from './src/components/header';


// Create a component
const App = () => (
  <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
// albums because that is the name of our project
// React vs ReactNative
// ES6 == new version of javascript
