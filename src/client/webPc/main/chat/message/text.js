import React from 'react';
import base from './base';
import expressions from '../../../../util/expressions';

const textMessage = {
    shouldRender: messageType => messageType === 'text',
    render: (message, me) => {
        let content = message.get('content');
        content = content.replace(
            /#\(([\u4e00-\u9fa5a-z]+)\)/g,
            (r, e) => (
                expressions.indexOf(e) !== -1 ? `<img class="expression-message" src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" style="background-position: left ${-30 * expressions.indexOf(e)}px" onerror="this.style.display=\'none\'">` : r
            )
        ).replace(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
            r => (
                `<a href="${r}" rel="noopener noreferrer" target="_blank">${r}</a>`
            )
        );
        return base(
            <div
                className="text"
                dangerouslySetInnerHTML={{ __html: content }}
            />,
            message,
            me,
        );
    },
};

export default textMessage;
