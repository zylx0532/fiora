import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import './header.scss';

@pureRender
class Header extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }

    render() {
        const { name } = this.props;

        return (
            <div className="chat-header">
                <span>{ name }</span>
                <div
                    className="back"
                    onClick={this.context.router.goBack}
                >{'< 后退'}</div>
            </div>
        );
    }
}

export default Header;
