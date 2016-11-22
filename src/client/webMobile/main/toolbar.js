import React from 'react';
import pureRender from 'pure-render-decorator';

import './toolbar.scss';

@pureRender
class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar">
                <div>
                    <i className="icon">
                        &#xe607;
                    </i>
                </div>
                <div>
                    <i className="icon">
                        &#xe606;
                    </i>
                </div>
            </div>
        );
    }
}

export default Toolbar;
