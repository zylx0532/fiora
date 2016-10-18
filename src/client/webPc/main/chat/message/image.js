import React from 'react';
import base from './base';
import ui from '../../../../action/pc';

const imageMessage = {
    shouldRender: messageType => messageType === 'image',
    render: (message, me, scrollMessage) => {
        let img = null;
        return base(
            <div
                className="image"
            >
                <img
                    src={message.get('content')}
                    ref={i => img = i}
                    onLoad={() => scrollMessage && scrollMessage()}
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
