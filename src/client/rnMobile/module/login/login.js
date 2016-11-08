import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';
import color from '../../util/color.js';

let styles = null;

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                    />
                </View>
                <View style={[styles.textInputContainer, { borderTopWidth: 0 }]}>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.button}>登录</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text
                        style={styles.text}
                    >新司机注册</Text>
                </View>
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
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 50,
        marginBottom: 5,
    },
    textInputContainer: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'stretch',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: color.gery[1],
        borderBottomWidth: 1,
        borderBottomColor: color.gery[1],
    },
    textInput: {
        height: 50,
        textAlign: 'center',
        fontSize: 18,
        color: color.gery[8],
    },
    buttonContainer: {
        backgroundColor: color.lightBlue[4],
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 3,
    },
    button: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: color.lightBlue[4],
        fontSize: 14,
    },
});
