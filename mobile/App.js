/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import relativeImg from '../common/relative.jpg';
import rootImg from './root.jpg';
import childImg from './images/child.jpg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Text style={styles.welcome}>
            Relative Image
          </Text>
          <Image source={relativeImg} />
        </View>
        <View style={styles.imgContainer}>
          <Text style={styles.welcome}>
            Root Image
          </Text>
          <Image source={rootImg} />
        </View>
        <View style={styles.imgContainer}>
          <Text style={styles.welcome}>
            Child Image
          </Text>
          <Image source={childImg} />
        </View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imgContainer: {
    width: 200, 
    height: 120, 
    margin: 10,
    borderWidth: 1,
    borderColor: 'red'
  }
});
