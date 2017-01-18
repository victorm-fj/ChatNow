import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ChatNow from './components/ChatNow';
import SignInScreen from './components/SignInScreen';

class App extends Component {
  render() {
    return (
      <ChatNow />
    );
  }
}

export default App;
