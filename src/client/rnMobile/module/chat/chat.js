import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
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
                <View style={styles.header()}>
                    <Text style={styles.headerNick()}>fiora</Text>
                </View>
                <ScrollView>
                    <View style={styles.messageList()}>
                        <View style={styles.message()}>
                            <Image
                                style={styles.avatar()}
                                source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                            />
                            <View style={styles.messageContainer()}>
                                <View style={styles.nickTimeContainer()}>
                                    <Text style={styles.nick()}>碎碎酱的小跟班</Text>
                                    <Text style={styles.time()}>11:11</Text>
                                </View>
                                <View style={styles.contentContainer()}>
                                    <Text style={styles.content()}>我是一只死辣鸡, 死啊死辣鸡.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.message()}>
                            <Image
                                style={styles.avatar()}
                                source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                            />
                            <View style={styles.messageContainer()}>
                                <View style={styles.nickTimeContainer()}>
                                    <Text style={styles.nick()}>碎碎酱的小跟班</Text>
                                    <Text style={styles.time()}>11:11</Text>
                                </View>
                                <View style={styles.contentContainer()}>
                                    <Text style={styles.content()}>我是一只死辣鸡, 死啊死辣鸡.我是一只死辣鸡, 死啊死辣鸡.我是一只死辣鸡, 死啊死辣鸡.我是一只死辣鸡, 死啊死辣鸡.我是一只死辣鸡, 死啊死辣鸡.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.inputContainer()}>
                    <TextInput style={styles.input()} />
                    <View style={styles.buttonContainer()}>
                        <Text style={styles.button()}>发送</Text>
                    </View>
                </View>
            </View>
        );
    }
}

styles = {
    container: () => ([
        cs.flex(),
        cs.bgColor(color.gery[3]),
    ]),
    header: () => ([
        cs.size(undefined, 60),
        cs.bgColor(color.lightBlue[5]),
        cs.padding(20),
        cs.center(),
    ]),
    headerNick: () => ([
        cs.font(18, undefined, 'bold'),
        cs.color(color.gery[1]),
    ]),

    messageList: () => ([
        cs.flex(),
        cs.layout('stretch'),
        cs.padding(5),
    ]),

    message: () => ([
        cs.direction(),
        cs.margin(0, 0, 5),
    ]),
    avatar: () => ([
        cs.size(40, 40),
        cs.radius(20),
        cs.margin(3, 10, 3, 10),
    ]),
    messageContainer: () => ([
        cs.flex(),
        cs.margin(0, 60),
        cs.padding(3),
    ]),
    nickTimeContainer: () => ([
        cs.direction(),
        cs.layout('flex-end'),
    ]),
    nick: () => ([
        cs.padding(0, 0, 0, 2),
        cs.color(color.gery[9]),
    ]),
    time: () => ([
        cs.margin(0, 0, 0, 10),
        cs.font(12),
        cs.color(color.gery[6]),
    ]),
    contentContainer: () => ([
        cs.bgColor('white'),
        cs.border('all', 1, color.gery[5]),
        cs.radius(5),
        cs.padding(5, 10, 5, 10),
        cs.margin(3),
    ]),
    content: () => ([

    ]),

    inputContainer: () => ([
        cs.direction(),
        cs.size(undefined, 34),
    ]),
    input: () => ([
        cs.bgColor('white'),
        cs.flex(),
        cs.size(undefined, 30),
        cs.margin(0, 10, 0, 10),
        cs.radius(5),
        cs.padding(0, 5, 0, 5),
    ]),
    buttonContainer: () => ([
        cs.bgColor(color.lightBlue[6]),
        cs.size(60, 30),
        cs.center(),
        cs.margin(0, 10),
        cs.radius(5),
    ]),
    button: () => ([
        cs.font(16),
        cs.color('white'),
    ]),
};
