import React from 'react';
import pureRender from 'pure-render-decorator';

import './emptyChatPanel.scss';

@pureRender
class EmptyChatPanel extends React.Component {
    render() {
        return (
            <div className="empty-chat-panel" >
                <div>hehe</div>
                <div>hehe2</div>
            </div>
        );
    }
}

export default EmptyChatPanel;
