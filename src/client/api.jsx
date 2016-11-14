import jQuery from 'jquery';
import socket from './socket';
import plugin from 'chat-room-plugin'

import React, {
    PropTypes
} from 'react'

const $ = jQuery;

window.jQuery = jQuery;
window.$ = jQuery;

const publicApi = {
    apis: {
        getApis: 'get api list. params( cb )',
        getOnlineCount: 'get online user count. params( cb )',
        sendMessage: 'send message. params( linkmanType, linkmanId, messageType, content, cb )',
    },
    getApis: function (cb) {
        cb(null, this.apis);
    },
    getOnlineCount: function (cb) {
        socket.get('/auth/count', {}, response => {
            cb(null, response.data.onlineCount);
        });
    },
    sendMessage: function (linkmanType, linkmanId, messageType, content, cb) {
        if (linkmanType === 'group') {
            socket.post('/groupMessage', {
                linkmanId,
                type: messageType,
                content,
            }, response => {
                if (response.status !== 201) {
                    return cb(response.data, null);
                }
                cb(null, response.data);
            });
        } else if (linkmanType === 'stranger') {
            socket.post('/message', {
                linkmanId,
                type: messageType,
                content,
            }, response => {
                if (response.status !== 201) {
                    return cb(response.data, null);
                }
                cb(null, response.data);
            });
        } else {
            cb('invalid linkman type', null);
        }
    },
};

export {
    publicApi,
};






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


function findUserMessage(userName) {
    if(!userName){
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
    
    if($item){
        $item.avatar = $item.find(".avatar-image,.avatar-text");
        $item.direction=$item.find(".message-self").length?'right':'left';
    }

    return $item;
}



class PluginMessage extends React.Component {
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
            .append(plugin.getMessage(this.props.name, this.props.content, this.props.isNew));
    }
    render() {
        return (<div
            className="plugin-dom-container"
            ref={dom => this.dom = dom}
        />);
    }
}

PluginMessage.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.any,
    isNew: PropTypes.bool.isRequired,
};


plugin.init({
    findUserMessage,
    getPluginMessageInfo,
    jQuery
})

export default {
    registerMessage: plugin.registerMessage,
    getPluginMessageInfo,
    getMessage: plugin.getMessage,
    findUserMessage,
    timestamp: 0,
    PluginMessage
};