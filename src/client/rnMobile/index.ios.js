/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import Index from './module/index.js';

export default class rnMobile extends Component {
    render() {
        return Index;
    }
}

AppRegistry.registerComponent('fiora', () => rnMobile);
