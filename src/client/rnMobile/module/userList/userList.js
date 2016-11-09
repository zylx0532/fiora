import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import cs from '../../util/commonStyle.js';

import Header from './header.js';
import LinkmanList from './linkmanList.js';

let styles = null;

export default class UserList extends Component {
    render() {
        return (
            <View style={styles.container()}>
                <Header />
                <LinkmanList />
            </View>
        );
    }
}

styles = {
    container: () => ([
        cs.layout('stretch'),
        cs.flex(),
    ]),
};
