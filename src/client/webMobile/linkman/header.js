import React from 'react';
import pureRender from 'pure-render-decorator';

import './header.scss';

@pureRender
class Header extends React.Component {
    render() {
        return (
            <div className="linkman-header">
                <img src={require('assets/images/logo.png')} />
            </div>
        );
    }
}

export default Header;
