import plugin from 'chat-room-plugin';

function getPluginMessageInfo(message) {
    let {
        content,
    } = message;

    const match = content.trim().match(/^([a-zA-Z0-9_-]+)\s*\(([\s\S]*)\)\s*;?\s*$/);

    const name = match && match[1];
    if (!name) {
        return;
    }

    const typeInfo = plugin.messageList[name];
    if (!typeInfo) {
        return;
    }
    const {
        showBase,
        process,
    } = typeInfo;

    if (process) {
        content = process(message);
    } else {
        content = match[2];
    }
    const ret = {
        name,
        content,
        showBase,
    };
    return ret;
}

function pluginMiddleware(message) {
    const pluginMessageInfo = getPluginMessageInfo(message);
    if (pluginMessageInfo) {
        message.type = 'plugin';
        message.preview = '[plugin]';
        message.showNotification = false;
        message.playSound = false;
        message.pluginMessageInfo = pluginMessageInfo;
    }
    return message;
}

export default pluginMiddleware;
