import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import ChatNow from './components/ChatNow';
import SignInScreen from './components/SignInScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

class App extends Component {
  renderScene = (route, navigator) => {
    switch (route.name) {
      case 'SignInScreen':
        return <SignInScreen />;
      case 'ChatNow':
      default:
        return <ChatNow />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'ChatNow', title: 'ChatNow' }}
        renderScene={this.renderScene}
        sceneStyle={styles.sceneContainer}
        style={styles.container}
      />
    );
  }
}

export default App;
