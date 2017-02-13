import React from 'react';
import pureRender from 'pure-render-decorator';

import './emptyChatPanel.scss';

@pureRender
class EmptyChatPanel extends React.Component {
    render() {
        return (
            <div className="empty-chat-panel" />
        );
    }
}

export default EmptyChatPanel;
