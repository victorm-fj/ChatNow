import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#232323',
  },
});

class ChatNow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to ChatNow App!
        </Text>
      </View>
    );
  }
}

export default ChatNow;
