import user from '../action/user';
import Store from '../store';
import ui from '../action/pc';
import messageHandle from '../util/message';

const filterReg = [
    /^\d+$/,
    /^hello\s*w/i,
    /^test/,
    /sdf|sfd|dsf|dfs|fsd|fds|sad/,
    /abc/,
    /^\.+$/,
    /^ceshi/,
    /^fds\w*$/i,
    /时候的/,
    /^dfg/,
    /^\d+[^\w]+$/,
    /^(\w)\1{2,}$/,
    /的范德萨发生/,
];

function send(linkmanType, linkmanId, messageType, messageContent) {
    const state = Store.getState();
    const messageId = `self${Date.now()}`;
    if (messageType === 'text') {
        messageContent = messageContent
            .replace(/&/g, '&amp')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&apos;');
    }
    messageHandle({
        _id: messageId,
        type: messageType,
        content: messageContent,
        from: {
            _id: state.getIn(['user', '_id']),
            avatar: state.getIn(['user', 'avatar']),
            username: state.getIn(['user', 'username']),
        },
        to: {
            _id: linkmanId,
        },
        linkmanType,
        isSelf: true,
    });

    // If the user is created today, the message filtering rules apply
    const userCreateTime = new Date(state.getIn(['user', 'createTime']));
    const nowTime = new Date();
    if (
        userCreateTime.getFullYear() === nowTime.getFullYear() &&
        userCreateTime.getMonth() === nowTime.getMonth() &&
        userCreateTime.getDay() === nowTime.getDay()
    ) {
        for (const reg of filterReg) {
            if (reg.test(messageContent)) {
                return;
            }
        }
    }

    if (linkmanType === 'group') {
        return user.sendGroupMessage(linkmanId, messageType, messageContent).then(response => {
            if (response.status === 401 && response.data === 'send messages too frequently') {
                ui.openNotification('消息发送频率过快, 请稍候.');
            }
            return response;
        });
    }
    else {
        return user.sendMessage(linkmanId, messageType, messageContent).then(response => {
            if (response.status === 401 && response.data === 'send messages too frequently') {
                ui.openNotification('消息发送频率过快, 请稍候.');
            }
            return response;
        });
    }
}

export default send;
