import React, { Component } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import pureRender from 'pure-render-decorator';

import cs from '../../util/commonStyle.js';
import Message from './message.js';

let styles = null;

@pureRender
export default class MessageList extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container()}>
                    <Message isSelf />
                    <Message />
                    <Message />
                    <Message isSelf />
                </View>
            </ScrollView>
        );
    }
}

styles = {
    container: () => ([
        cs.flex(),
        cs.layout('stretch'),
        cs.padding(5),
    ]),
};
