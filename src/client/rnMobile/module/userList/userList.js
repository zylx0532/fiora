import React, { Component, PropTypes } from 'react';
import {
    View,
} from 'react-native';
import pureRenderMixin from 'react-addons-pure-render-mixin';

import cs from '../../util/commonStyle.js';
import Header from './header.js';
import LinkmanList from './linkmanList.js';

let styles = null;

export default class UserList extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const { navigator } = this.props;
        return (
            <View style={styles.container()}>
                <Header />
                <LinkmanList
                    navigator={navigator}
                />
            </View>
        );
    }
}

styles = {
    container: () => ([
        cs.layout('stretch'),
        cs.flex(),
    ]),
};
