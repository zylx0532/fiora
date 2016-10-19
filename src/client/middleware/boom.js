function boom(message) {
    const reg = new RegExp('^boom\\s*\\(([\\s\\S]*)\\)\\s*;?');
    const match = message.content.trim().match(reg);
    if (match) {
        message.content = match[1].trim();
        message.type = 'boom';
    }
    return message;
}

export default boom;
