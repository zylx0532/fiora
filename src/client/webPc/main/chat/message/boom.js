import React from 'react';
import base from './base';

const boomMessage = {
    shouldRender: messageType => messageType === 'boom',
    render: (message, me) => (
        base(
            <div
                className="text"
            >
                这是个炸弹, 还没写render逻辑
            </div>,
            message,
            me,
        )
    ),
};

export default boomMessage;
