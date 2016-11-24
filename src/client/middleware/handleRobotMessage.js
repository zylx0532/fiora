function getMessageType(message) {
    if (message.type === 'imageMessage') {
        return 'image';
    }
    else if (message.type === 'pluginMessage') {
        return 'plugin';
    }
    else if (message.type === 'codeMessage') {
        return 'unknown';
    }
    return 'text';
}

export default function handleRobotMessage(message) {
    // 5835984b5fe025750e972349 -> fiora数据库中robot10的id
    if (typeof message.from === 'object' && message.from._id === '5835984b5fe025750e972349') {
        message.content = message.content
                .replace(/&amp/g, '&')
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
        message.from.username = `CR - ${messageData.name}`;
        message.from.avatar = messageData.avatar;
        message.type = getMessageType(messageData);
        message.content = messageData.content;
        message.preview = `${message.from.username}: ${message.type === 'text' ? message.content : message.type}`;
        message.playSound = false;
        if (message.showNotification) {
            message.notification.body = message.type === 'text' ? message.content : `[${message.type}]`;
            message.notification.title = `${message.from.username} - 发来消息:`;
        }
    }
    return message;
}
