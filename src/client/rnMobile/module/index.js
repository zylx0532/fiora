import React, { Component, PropTypes } from 'react';
import {
    Navigator,
} from 'react-native';
import { connect, Provider } from 'react-redux';
import pureRender from 'pure-render-decorator';

import Store from '../../store.js';

import Chat from './chat/chat.js';
import Login from './login/login.js';
import UserList from './userList/userList.js';

const routes = {
    chat: Chat,
    login: Login,
    userList: UserList,
};

@pureRender
class NavigatorContainer extends Component {
    static propTypes = {
        state: PropTypes.object,
        router: PropTypes.string.isRequired,
        routerParams: PropTypes.object.isRequired,
    }

    render() {
        const { router, routerParams } = this.props;
        const RenderComponent = routes[router];
        return (
            <RenderComponent {...routerParams.toJS()} />
        );
    }
}

const ConnectedNavigatorContainer = connect(
    state => ({
        router: state.getIn(['rn', 'router']),
        routerParams: state.getIn(['rn', 'routerParams']),
    })
)(NavigatorContainer);

@pureRender
class Index extends Component {
    static propTypes = {
        state: PropTypes.object,
    }

    render() {
        // for debug
        console.logState('global state', this.props.state.toJS());

        return (
            <Navigator
                initialRoute={{}}
                renderScene={
                    (route, navigator) => (
                        <ConnectedNavigatorContainer
                            navigator={navigator}
                        />
                    )
                }
            />
        );
    }
}

const ConnectedIndex = connect(
    state => ({
        state,
        router: state.getIn(['rn', 'router']),
        routerParams: state.getIn(['rn', 'routerParams']),
    })
)(Index);

const provider = (
    <Provider store={Store}>
        <ConnectedIndex />
    </Provider>
);

export default provider;
