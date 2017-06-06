/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
