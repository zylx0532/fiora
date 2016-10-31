import React, { PropTypes } from 'react';
import jQuery from 'jquery';
import base from './base';

import api from '../../../../api';

class PluginMessage extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.any,
        isNew: PropTypes.bool.isRequired,
    };

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
             .append(api.getMessage(this.props.name, this.props.content, this.props.isNew));
    }
    render() {
        return (<div
            className="plugin-dom-container"
            ref={dom => this.dom = dom}
        />);
    }
 }

const plugin = {
    shouldRender: messageType => messageType === 'plugin',
    render: (message, me) => {
        const showBase = message.get('pluginMessageInfo').get('showBase');
        const pluginMessage = <PluginMessage name={message.get('pluginMessageInfo').get('name')} content={message.get('pluginMessageInfo').get('content')} isNew={message.get('isNew')} />;
        if (showBase) {
            return base(pluginMessage, message, me);
        } else {
            return pluginMessage;
        }
    },
};

export default plugin;
