import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import base from './base';

import api from '../../../../api.jsx';


const plugin = {
    shouldRender: messageType => messageType === 'plugin',
    render: (message, me) => {
        const showBase = message.get('pluginMessageInfo').get('showBase');
        const pluginMessage = <api.PluginMessage name={message.get('pluginMessageInfo').get('name')} content={message.get('pluginMessageInfo').get('content')} isNew={message.get('isNew')} />;
        if (showBase) {
            return base(pluginMessage, message, me);
        } else {
            return pluginMessage;
        }
    },
};

export default plugin;
