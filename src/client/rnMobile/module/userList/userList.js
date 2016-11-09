import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';
import color from '../../util/color.js';
import cs from '../../util/commonStyle.js';

let styles = null;

export default class UserList extends Component {
    render() {
        return (
            <View style={styles.container()}>
                <View style={styles.header()}>
                    <Image
                        style={styles.headerAvatar()}
                        source={{ uri: 'https://ogbhsgzz2.qnssl.com/user_avatar_default.png' }}
                    />
                    <View style={styles.headerOnline(true)} />
                    <Text style={styles.headerNick()}>碎碎酱</Text>
                </View>
                <ScrollView>
                    <View style={styles.linkmanList()}>
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_5821339e137b2c54b6007cf8_1478570943622.jpeg'}
                            username={'智者sama'}
                            time={'12:34'}
                            preview={'小跟班是个辣鸡'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                        <User
                            avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                            username={'碎碎酱的小跟班'}
                            time={'12:35'}
                            preview={'对对对'}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class User extends Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
    }

    render() {
        const { avatar, username, time, preview } = this.props;

        return (
            <View style={styles.linkman()}>
                <Image
                    style={styles.linkmanAvatar()}
                    source={{ uri: avatar }}
                />
                <View style={styles.linkmanContent()}>
                    <View style={styles.linkmanNickTimeContainer()}>
                        <Text style={styles.linkmanNick()}>{username}</Text>
                        <Text style={styles.linkmanTime()}>{time}</Text>
                    </View>
                    <Text style={styles.linkmanPreview()}>{preview}</Text>
                </View>
            </View>
        );
    }
}

styles = {
    container: () => ([
        cs.layout('stretch'),
        cs.flex(),
    ]),
    header: () => ([
        cs.size(undefined, 60),
        cs.bgColor(color.lightBlue[5]),
        cs.padding(20),
        cs.direction(),
        cs.center(),
    ]),
    headerAvatar: () => ([
        cs.size(34, 34),
        cs.radius(17),
        cs.position('absolute', undefined, undefined, 3, 10),
    ]),
    headerOnline: (isOnline) => ([
        cs.size(6, 6),
        cs.radius(3),
        cs.bgColor(isOnline ? '#7cfc00' : 'red'),
        cs.position('absolute', undefined, undefined, 17, 52),
    ]),
    headerNick: () => ([
        cs.font(16),
        cs.color(color.gery[1]),
    ]),

    linkmanList: () => ([
        cs.flex(),
        cs.layout('stretch'),
    ]),
    linkman: () => ([
        cs.size(undefined, 70),
        cs.layout('center'),
        cs.direction(),
    ]),
    linkmanAvatar: () => ([
        cs.size(50, 50),
        cs.radius(25),
        cs.margin(0, 10, 0, 10),
    ]),
    linkmanContent: () => ([
        cs.flex(),
        cs.alignSelf(),
        cs.border('Bottom', 1, color.gery[2]),
        cs.layout('stretch', 'center'),
        cs.padding(0, 10),
    ]),
    linkmanNickTimeContainer: () => ([
        cs.direction(),
        cs.layout('flex-end', 'space-between'),
    ]),
    linkmanNick: () => ([
        cs.font(18),
    ]),
    linkmanTime: () => ([
        cs.font(12),
        cs.color(color.gery[6]),
    ]),
    linkmanPreview: () => ([
        cs.color(color.gery[7]),
        cs.margin(3),
    ]),
};
