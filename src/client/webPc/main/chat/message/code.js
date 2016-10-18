import React from 'react';
import Highlight from 'react-highlight';

import base from './base';

const codeMessage = {
    shouldRender: messageType => messageType === 'code',
    render: (message, me) => (
        base(
            <div
                className="code"
            >
                <Highlight>
                    {message.get('content')}
                </Highlight>
            </div>,
            message,
            me,
        )
    ),
};

export default codeMessage;
