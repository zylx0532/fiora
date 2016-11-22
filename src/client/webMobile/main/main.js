import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import './main.scss';

@pureRender
class Main extends React.Component {
    static propTypes = {
        children: PropTypes.element,
    };

    render() {
        return (
            <div className="main">
                { this.props.children }
            </div>
        );
    }
}

export default Main;
