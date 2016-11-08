/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import Login from './module/login/login.js';

export default class rnMobile extends Component {
    render() {
        return (
            <Login />
        );
    }
}

AppRegistry.registerComponent('fiora', () => rnMobile);
