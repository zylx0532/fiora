import user from '../action/user';
import Store from '../store';

function send(linkmanType, linkmanId, messageType, messageContent) {
    const messageId = `self${Date.now()}`;
    user.addSelfMessage(linkmanType, linkmanId, messageType, messageContent, messageId);

    // If the user is created today, the message filtering rules apply
    const userCreateTime = new Date(Store.getState().getIn(['user', 'createTime']));
    const nowTime = new Date();
    if (
        userCreateTime.getFullYear() === nowTime.getFullYear() &&
        userCreateTime.getMonth() === nowTime.getMonth() &&
        userCreateTime.getDay() === nowTime.getDay() &&
        /^\d+$/.test(messageContent) &&
        /^hello\s*w/i.test(messageContent) &&
        /^test/.test(messageContent) &&
        /^sdf/.test(messageContent) &&
        /^abc/.test(messageContent) &&
        /^\.+$/.test(messageContent)
    ) {
        return;
    }

    if (linkmanType === 'group') {
        return user.sendGroupMessage(linkmanId, messageType, messageContent);
    }
    else {
        return user.sendMessage(linkmanId, messageType, messageContent);
    }
}

export default send;
