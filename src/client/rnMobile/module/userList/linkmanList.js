import React, { Component } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import cs from '../../util/commonStyle.js';

import Linkman from './linkman.js';

let styles = null;

export default class UserList extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container()}>
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_5821339e137b2c54b6007cf8_1478570943622.jpeg'}
                        username={'智者sama'}
                        time={'12:34'}
                        preview={'小跟班是个辣鸡'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                    <Linkman
                        avatar={'https://ogb59u526.qnssl.com/user_57d657f09e1dc93d74ce47c4_1474428834611.gif'}
                        username={'碎碎酱的小跟班'}
                        time={'12:35'}
                        preview={'对对对'}
                    />
                </View>
            </ScrollView>
        );
    }
}

styles = {
    container: () => ([
        cs.flex(),
        cs.layout('stretch'),
    ]),
};
