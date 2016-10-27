import React, { PropTypes } from 'react';
import jQuery from 'jquery';

import api from '../../../../api';

class PluginMessage extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    };

    componentDidMount() {
        this.renderMessage();
    }
    componentDidUpdate() {
        this.renderMessage();
    }
    renderMessage() {
        jQuery(this.dom).empty()
             .append(api.getMessage(this.props.name, this.props.content));
    }
    render() {
        return (<div
            className="plugin-dom-container"
            ref={dom => this.dom = dom}
        />);
    }
 }

const boomMessage = {
    shouldRender: messageType => messageType === 'plugin',
    render: (message) => (
        <PluginMessage name={message.get('pluginMessageInfo').get('name')} content={message.get('pluginMessageInfo').get('content')} />
    ),
};

export default boomMessage;
