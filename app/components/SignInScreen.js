import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8146B3',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    marginTop: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 300,
    color: '#4ba3c9',
    borderWidth: 2,
    borderColor: '#8146B3',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  actionBtn: {
    marginTop: 36,
    alignSelf: 'flex-end',
    backgroundColor: '#78B346',
  },
  actionBtnText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  externalLink: {
    fontSize: 12,
    color: '#dfdfdf',
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,
  },
});

// callback function that triggers when forgot account text is pressed
const openHelpPage = () => {
  // built in RN component to interact with app links
  Linking.openURL('https://www.google.com/');
};

const SignInScreen = () => (
  <View style={styles.container}>
    <View style={styles.form}>
      <Text style={styles.label}>My Name:</Text>
      <TextInput style={styles.input} keyboardType="numeric" underlineColorAndroid="rgba(0,0,0,0)" />

      <Text style={styles.label}>My Account Number:</Text>
      <TextInput style={styles.input} underlineColorAndroid="rgba(0,0,0,0)" />

      <TouchableOpacity style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>Go</Text>
      </TouchableOpacity>
    </View>

    <Text
      onPress={openHelpPage}
      style={styles.externalLink}
    >
      Forgot your account number?
    </Text>
  </View>
);

export default SignInScreen;
