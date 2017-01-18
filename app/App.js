import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import routes from './routes';
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
        return (
          // Pass down func as a prop
          <ChatNow
            getHelpPressHandler={() => {
              navigator.push(routes.signIn);
            }}
          />
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={routes.main}
        renderScene={this.renderScene}
        sceneStyle={styles.sceneContainer}
        style={styles.container}
      />
    );
  }
}

export default App;
