/**
 * Actual neroor application that is going to be used by Doctors. 
 * This app is the starting point; and gets included by index.ios.tsx and index.android.tsx
 * 
 * @author Ganesh Kondal
 * @flow
 */

import * as React from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
/** Custom component imports */

import Login from './login/login';

export default class NeroorApp extends React.Component<object, object> {
  render() {
    return (
      <Login/> 
    );
  }
}



AppRegistry.registerComponent('NeroorApp', () => NeroorApp);
