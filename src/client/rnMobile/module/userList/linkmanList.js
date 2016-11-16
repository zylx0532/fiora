import React, { Component, PropTypes } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import pureRenderMixin from 'react-addons-pure-render-mixin';

import cs from '../../util/commonStyle.js';
import Linkman from './linkman.js';

let styles = null;

class UserList extends Component {
    static propTypes = {
        linkmans: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const { linkmans, navigator } = this.props;
        return (
            <ScrollView>
                <View style={styles.container()}>
                    {
                        linkmans.map(linkman => (
                            <Linkman
                                key={linkman.get('type') + linkman.get('_id')}
                                linkman={linkman}
                                navigator={navigator}
                            />
                        ))
                    }
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

export default connect(
    state => ({
        linkmans: state.getIn(['user', 'linkmans']),
    })
)(UserList);
