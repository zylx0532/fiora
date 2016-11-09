import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import color from '../../util/color.js';
import cs from '../../util/commonStyle.js';

let styles = null;

export default class Linkman extends Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
    }

    render() {
        const { avatar, username, time, preview } = this.props;

        return (
            <View style={styles.container()}>
                <Image
                    style={styles.avatar()}
                    source={{ uri: avatar }}
                />
                <View style={styles.content()}>
                    <View style={styles.nickTimeContainer()}>
                        <Text style={styles.nick()}>{username}</Text>
                        <Text style={styles.time()}>{time}</Text>
                    </View>
                    <Text style={styles.preview()}>{preview}</Text>
                </View>
            </View>
        );
    }
}

styles = {
    container: () => ([
        cs.size(undefined, 70),
        cs.layout('center'),
        cs.direction(),
    ]),
    avatar: () => ([
        cs.size(50, 50),
        cs.radius(25),
        cs.margin(0, 10, 0, 10),
    ]),
    content: () => ([
        cs.flex(),
        cs.alignSelf(),
        cs.border('Bottom', 1, color.gery[2]),
        cs.layout('stretch', 'center'),
        cs.padding(0, 10),
    ]),
    nickTimeContainer: () => ([
        cs.direction(),
        cs.layout('flex-end', 'space-between'),
    ]),
    nick: () => ([
        cs.font(18),
    ]),
    time: () => ([
        cs.font(12),
        cs.color(color.gery[6]),
    ]),
    preview: () => ([
        cs.color(color.gery[7]),
        cs.margin(3),
    ]),
};
