import api from '../api';

function plugin(message) {
    const pluginMessageInfo = api.getVirtualMessageName(message.content);
    if (pluginMessageInfo) {
        message.type = 'plugin';
        message.pluginMessageInfo = pluginMessageInfo;
    }
    return message;
}

export default plugin;
