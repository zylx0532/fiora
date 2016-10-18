import React from 'react';
import base from './base';

const urlMessage = {
    shouldRender: messageType => messageType === 'url',
    render: (message, me) => (
        base(
            <div
                className="url"
            >
                <a
                    href={message.get('content')}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    { message.get('content') }
                </a>
            </div>,
            message,
            me,
        )
    ),
};

export default urlMessage;
