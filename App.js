/**
 * react-native 的基础实现
 * android 版本
 * author  邓浩琦
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import initStore from './src/store/store';
import router from './router'
const store = initStore();
type Props = {};
const Navigator = router.Navigator;
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
  }
}
