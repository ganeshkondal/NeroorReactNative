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

export default class NeroorAppiOS extends React.Component<object, object> {
  render() {
    return (
      <NeroorApp/>
    );
  }
}


// initial version of xcode project started with the name 'NeroorReactNative' so now unable to change it 
// NeroorApp - like in Android. So to make it work, leaving it as 'NeroorReactNative'
AppRegistry.registerComponent('NeroorReactNative', () => NeroorAppiOS);
