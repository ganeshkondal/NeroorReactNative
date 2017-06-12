/**
 * Login Component. Shows a form field
 */

import * as React from 'react';
import {StyleSheet, Button, Text, TextInput, ScrollView} from 'react-native';

import Label from './../components/Label';
import Container from './../components/Container';

interface Props {}

interface State {}

export default class Login extends React.Component <Props,State > {
  render() {
    return (
      <ScrollView style={styles.loginFormContainer}>
        <Label name='UserID'/>
        <TextInput style={styles.textInput}/>
        <Label name='Password'/>
        <TextInput secureTextEntry={true} style={styles.textInput}/>
        <Button title="Forgot UserID/Password"
                onPress=""/>

      </ScrollView>
    );
  } // render()
}

const styles = StyleSheet.create({
  loginFormContainer: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  textInput: {
    height: 30,
    fontSize: 14,
    backgroundColor: '#FFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  label:{
    color: '#0d8898',
    fontSize: 20
  }
});