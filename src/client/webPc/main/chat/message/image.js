import React from 'react';
import base from './base';
import ui from '../../../../action/pc';

const imageMessage = {
    shouldRender: messageType => messageType === 'image',
    render: (message, me, scrollMessage) => {
        let img = null;
        const content = message.get('content');
        return base(
            <div
                className="image"
            >
                <img
                    style={{ maxHeight: window.innerHeight > 800 ? 300 : 200 }}
                    src={`${content}${/^http/.test(content) ? '?imageView/2/w/200/h/200' : ''}`}
                    ref={i => img = i}
                    onLoad={scrollMessage}
                    onError={() => img.src = 'http://assets.suisuijiang.com/image_not_found.png?imageView2/2/w/250'}
                    onDoubleClick={() => ui.openImageViewer(message.get('content'))}
                />
            </div>,
            message,
            me,
        );
    },
};

export default imageMessage;
