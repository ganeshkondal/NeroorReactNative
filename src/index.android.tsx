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

import NeroorApp from './NeroorApp';

export default class NeroorAppAndroid extends React.Component<object, object> {
  render() {
    return (
      <NeroorApp/>
    );
  }
}



AppRegistry.registerComponent('NeroorAppAndroid', () => NeroorAppAndroid);
