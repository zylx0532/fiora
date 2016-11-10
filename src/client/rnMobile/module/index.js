/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Navigator,
} from 'react-native';

import Chat from './chat/chat.js';
import Login from './login/login.js';
import UserList from './userList/userList.js';

const routes = {
    chat: Chat,
    login: Login,
    userList: UserList,
};

export default class Index extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ page: 'chat' }}
                renderScene={
                    (route, navigator) => {
                        const RenderComponent = routes[route.page];
                        return (
                            <RenderComponent
                                {...route}
                                navigator={navigator}
                            />
                        );
                    }
                }
            />
        );
    }
}
