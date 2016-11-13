import api from '../api.jsx';

function plugin(message) {
    const pluginMessageInfo = api.getPluginMessageInfo(message);
    if (pluginMessageInfo) {
        message.type = 'plugin';
        message.preview = '[plugin]';
        message.showNotification = false;
        message.playSound = false;
        message.pluginMessageInfo = pluginMessageInfo;
    }
    return message;
}

export default plugin;
