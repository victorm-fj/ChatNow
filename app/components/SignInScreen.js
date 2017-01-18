import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
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

const SignInScreen = () => (
  <View style={styles.container}>
    <View style={styles.form}>
      <Text style={styles.label}>My Name:</Text>

      <Text style={styles.label}>My Account Number:</Text>

      <TouchableOpacity style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>Go</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.externalLink}>Forgot your account number?</Text>
  </View>
);

export default SignInScreen;
