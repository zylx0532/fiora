import plugin from 'chat-room-plugin';
import jQuery from 'jquery';

const $ = jQuery;

function findUserMessage(userName) {
    if (!userName) {
        return;
    }
    let fullMatch = false;
    const match = userName.match(/^"([\s\S]*)"$/);
    if (match) {
        userName = match[1];
        fullMatch = true;
    }
    const $names = $('.message-list-item').find('.message-username');
    let $item;
    for (let i = $names.length - 1; i >= 0; i--) {
        const thisName = $names.eq(i).text();
        if (fullMatch) {
            if (thisName === userName) {
                $item = $names.eq(i).parents('.message-list-item');
                break;
            }
        } else {
            if (thisName.indexOf(userName) !== -1) {
                $item = $names.eq(i).parents('.message-list-item');
                break;
            }
        }
    }

    if ($item) {
        $item.avatar = $item.find('.avatar-image,.avatar-text');
        $item.direction = $item.find('.message-self').length ? 'right' : 'left';
    }

    return $item;
}

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

plugin.init({
    findUserMessage,
    getPluginMessageInfo,
    jQuery,
});

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
