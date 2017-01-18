import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Platform,
} from 'react-native';

import routes from './routes';
import NavBarRouteMapper from './NavBarRouteMapper';
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
    marginTop: Platform.OS === 'ios' ? 64 : 56,
  },
  navBar: {
    backgroundColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#494949',
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
        navigationBar={<Navigator.NavigationBar
          routeMapper={NavBarRouteMapper}
          style={styles.navBar}
        />}
      />
    );
  }
}

export default App;
