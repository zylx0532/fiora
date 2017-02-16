import React, { Component, PropTypes } from 'react';

import 'components/styles.less';

class Avatar extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    };

    render() {
        const { width, height } = this.props;
        return (
            <img
                className="avatar" style={{ width, height }}
                src="http://cdn.suisuijiang.com/user_58691709fd51cd2598ff68a8_1483282332456.gif"
            />
        );
    }
}

export default Avatar;
