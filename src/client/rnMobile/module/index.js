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
        console.log(this.props.state);
        return (
            <Provider store={Store}>
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
            </Provider>
        );
    }
}

export default connect(
    state => ({
        state,
    })
)(Index);
