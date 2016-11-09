import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';
import color from '../../util/color.js';
import cs from '../../util/commonStyle.js';

let styles = null;

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container()}>
                <Image
                    style={styles.avatar()}
                    source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                />
                <View style={styles.textInputContainer()}>
                    <TextInput
                        style={styles.textInput()}
                    />
                </View>
                <View style={[styles.textInputContainer(true)]}>
                    <TextInput
                        style={styles.textInput()}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer()}>
                    <Text style={styles.button()}>登录</Text>
                </View>
                <View style={styles.textContainer()}>
                    <Text
                        style={styles.text()}
                    >新司机注册</Text>
                </View>
            </View>
        );
    }
}

styles = {
    container: () => ([
        cs.layout('center'),
        cs.flex(),
        cs.bgColor(color.gery[1]),
    ]),
    avatar: () => ([
        cs.size(80, 80),
        cs.margin(50, undefined, 5, undefined),
        cs.radius(40),
    ]),
    textInputContainer: (noTopBorder) => ([
        cs.layout('stretch'),
        cs.border(`${noTopBorder ? '' : 'Top'} Bottom`, 1, color.gery[1]),
        cs.bgColor('white'),
        cs.size(undefined, 50),
        cs.alignSelf(),
    ]),
    textInput: () => ([
        cs.size(undefined, 50),
        cs.textAlign(),
        cs.font(18),
        cs.color(color.gery[8]),
    ]),
    buttonContainer: () => ([
        cs.bgColor(color.lightBlue[4]),
        cs.center(),
        cs.alignSelf(),
        cs.size(undefined, 40),
        cs.margin(10, 10, undefined, 10),
        cs.radius(3),
    ]),
    button: () => ([
        cs.color('white'),
        cs.font(18, undefined, 'bold'),
    ]),
    textContainer: () => ([
        cs.center(),
        cs.size(100, 50),
        cs.position('absolute', undefined, 0, 0),
    ]),
    text: () => ([
        cs.color(color.lightBlue[4]),
    ]),
};
