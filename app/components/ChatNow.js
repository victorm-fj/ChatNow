import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8146B3',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#fff',
  },
  btnContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  btn: {
    justifyContent: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#78B346',
    padding: 30,
    elevation: 5,
    shadowColor: '#cb3b27',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 0,
  },
  btnText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '200',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

class ChatNow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            SomeFakeCo Chat
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
              Get Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ChatNow;
