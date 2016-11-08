import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import color from '../../util/color.js';

let styles = null;

export default class UserList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>User List</Text>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.gery[1],
    },
});
