import React, { Component, PropTypes } from 'react';
import {
    Navigator,
} from 'react-native';
import { connect, Provider } from 'react-redux';

import Store from '../../store.js';

import Chat from './chat/chat.js';
import Login from './login/login.js';
import UserList from './userList/userList.js';

const routes = {
    chat: Chat,
    login: Login,
    userList: UserList,
};

class Index extends Component {
    static propTypes = {
        state: PropTypes.object,
    }

    render() {
        // for debug
        console.logState('global state', this.props.state.toJS());

        return (
            <Navigator
                initialRoute={{ page: 'login', status: 'login' }}
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

const ConnectedIndex = connect(
    state => ({
        state,
    })
)(Index);

const provider = (
    <Provider store={Store}>
        <ConnectedIndex />
    </Provider>
);

export default provider;
