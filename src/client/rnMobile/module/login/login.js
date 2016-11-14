import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import pureRenderMixin from 'react-addons-pure-render-mixin';
import color from '../../util/color.js';
import cs from '../../util/commonStyle.js';

let styles = null;

export default class Login extends Component {
    static propTypes = {
        status: PropTypes.string,
        navigator: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.renderSignup = this.renderSignup.bind(this);
    }

    renderLogin() {
        const { navigator } = this.props;
        return (
            <View style={styles.container()}>
                <Image
                    style={styles.avatar()}
                    source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                />
                <View style={styles.textInputContainer()}>
                    <TextInput
                        style={styles.textInput()}
                        autoCorrect={false}
                        autoFocus
                        maxLength={16}
                        placeholder="请输入用户名"
                    />
                </View>
                <View style={[styles.textInputContainer(true)]}>
                    <TextInput
                        style={styles.textInput()}
                        secureTextEntry
                        placeholder="请输入密码"
                    />
                </View>
                <View style={styles.buttonContainer()}>
                    <Text style={styles.button()}>登录</Text>
                </View>
                <TouchableOpacity
                    style={styles.textContainer()}
                    onPress={() => navigator.push({ page: 'login', status: 'signup' })}
                >
                    <Text
                        style={styles.text()}
                    >新司机注册</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderSignup() {
        const { navigator } = this.props;
        return (
            <View style={styles.container()}>
                <Image
                    style={styles.avatar()}
                    source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                />
                <View style={styles.textInputContainer()}>
                    <TextInput
                        style={styles.textInput()}
                        autoCorrect={false}
                        autoFocus
                        maxLength={16}
                        placeholder="请输入用户名(即昵称)"
                    />
                </View>
                <View style={[styles.textInputContainer(true)]}>
                    <TextInput
                        style={styles.textInput()}
                        secureTextEntry
                        placeholder="请输入密码"
                    />
                </View>
                <View style={styles.buttonContainer()}>
                    <Text style={styles.button()}>注册</Text>
                </View>
                <TouchableOpacity
                    style={styles.textContainer()}
                    onPress={() => navigator.push({ page: 'login', status: 'login' })}
                >
                    <Text
                        style={styles.text()}
                    >老司机登录</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return !this.props.status || this.props.status === 'login' ? this.renderLogin() : this.renderSignup();
    }
}

styles = {
    container: () => ([
        cs.layout('center'),
        cs.flex(),
        cs.bgColor(color.gery[1]),
        cs.position('relative'),
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
        cs.position('absolute', undefined, 0, 0, undefined),
    ]),
    text: () => ([
        cs.color(color.lightBlue[4]),
    ]),
};
