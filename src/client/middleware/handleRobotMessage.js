import xss from '../util/xss';

function getMessageType(message) {
    if (/image/.test(message.type)) {
        return 'image';
    }
    else if (/plugin/.test(message.type)) {
        return 'plugin';
    }
    else if (/code/.test(message.type)) {
        return 'unknown';
    }
    return 'text';
}

export default function handleRobotMessage(message) {
    // 591ffd998cd75f2f076dfebf -> fiora数据库中robot10的id
    if (typeof message.from === 'object' && message.from._id === '591ffd998cd75f2f076dfebf') {
        message.content = message.content
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&apos;/g, "'");

        let messageData = null;
        try {
            messageData = JSON.parse(message.content);
        }
        catch (err) {
            return message;
        }
        message.from.username = `${messageData.source} - ${messageData.name}`;
        message.from.avatar = messageData.avatar;
        message.type = getMessageType(messageData);
        message.content = xss(messageData.content);
        message.preview = `${message.from.username}: ${message.type === 'text' ? messageData.content : `[${message.type}]`}`;
        if (message.showNotification) {
            message.notification.body = message.type === 'text' ? message.content : `[${message.type}]`;
            message.notification.title = `${message.from.username} - 发来消息:`;
        }
    }
    return message;
}
