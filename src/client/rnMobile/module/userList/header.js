import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import color from '../../util/color.js';
import cs from '../../util/commonStyle.js';

let styles = null;

export default class UserList extends Component {
    render() {
        return (
            <View style={styles.container()}>
                <Image
                    style={styles.avatar()}
                    source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                />
                <View style={styles.online(true)} />
                <Text style={styles.nick()}>碎碎酱</Text>
            </View>
        );
    }
}

styles = {
    container: () => ([
        cs.size(undefined, 60),
        cs.bgColor(color.lightBlue[5]),
        cs.padding(20),
        cs.direction(),
        cs.center(),
    ]),
    avatar: () => ([
        cs.size(34, 34),
        cs.radius(17),
        cs.position('absolute', undefined, undefined, 3, 10),
    ]),
    online: (isOnline) => ([
        cs.size(6, 6),
        cs.radius(3),
        cs.bgColor(isOnline ? '#7cfc00' : 'red'),
        cs.position('absolute', undefined, undefined, 17, 52),
    ]),
    nick: () => ([
        cs.font(16),
        cs.color(color.gery[1]),
    ]),
};
