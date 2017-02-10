import React from 'react';
import pureRender from 'pure-render-decorator';

import './logo.scss';

@pureRender
class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={require('assets/images/logo.png')} />
            </div>
        );
    }
}

export default Logo;
