import React from 'react';
import base from './base';

const unknownMessage = {
    shouldRender: () => true,
    render: (message, me) => (
        base(
            <div
                className="unknown"
            >
                不支持的消息类型
            </div>,
            message,
            me,
        )
    ),
};

export default unknownMessage;
