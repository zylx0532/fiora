import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import plugin from 'chat-room-plugin';

import base from './base';

class PluginMessage extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.any,
        isNew: PropTypes.bool.isRequired,
    }
    componentDidMount() {
        this.renderMessage();
    }
    shouldComponentUpdate(nextProps) {
        const currentProps = this.props;
        return !(
            currentProps.content === nextProps.content &&
            currentProps.name === nextProps.name
        );
    }

    componentDidUpdate() {
        this.renderMessage();
    }

    renderMessage() {
        jQuery(this.dom).empty()
            .append(plugin.getMessage(this.props.name, this.props.content, this.props.isNew));
    }
    render() {
        return (<div
            className="plugin-dom-container"
            ref={dom => this.dom = dom}
        />);
    }
}


const pluginMessage = {
    shouldRender: messageType => messageType === 'plugin',
    render: (message, me) => {
        const showBase = message.get('pluginMessageInfo').get('showBase');
        if (showBase) {
            return base(pluginMessage, message, me);
        } else {
            return <PluginMessage name={message.get('pluginMessageInfo').get('name')} content={message.get('pluginMessageInfo').get('content')} isNew={message.get('isNew')} />;
        }
    },
};

export default pluginMessage;
