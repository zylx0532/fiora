import React, { PropTypes } from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import './messageList.scss';

import ui from '../../../action/pc';
import user from '../../../action/user';

import textMessage from './message/text';
import unknownMessage from './message/unknown';
import imageMessage from './message/image';
import urlMessage from './message/url';
import codeMessage from './message/code';

import pluginMessage from './message/plugin';

const messageTypes = [
    textMessage,
    imageMessage,
    urlMessage,
    codeMessage,
    pluginMessage,
];

let onScrollHandle = null;
let scrollMessage = null;

class MessageList extends React.Component {
    static propTypes = {
        children: PropTypes.object,
        linkmanId: PropTypes.string.isRequired,
        linkmanType: PropTypes.string.isRequired,
        messagesCount: PropTypes.number,
    };

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
    }

    handleOnScroll() {
        const { linkmanId, linkmanType, messagesCount } = this.props;
        if (onScrollHandle) {
            clearTimeout(onScrollHandle);
        }
        onScrollHandle = setTimeout(() => {
            ui.shouldScrollMessage(this.list.scrollHeight - this.list.scrollTop - this.list.clientHeight < this.list.clientHeight / 2);
            if (this.list.scrollTop === 0 && linkmanType === 'group') {
                user.getGroupHistoryMessage(linkmanId, messagesCount);
            }
        }, 100);
    }

    render() {
        return (
            <div
                className="message-list"
                ref={list => this.list = list}
                onScroll={this.handleOnScroll}
            >
                { this.props.children }
            </div>
        );
    }
}

class Message extends React.Component {
    static propTypes = {
        me: PropTypes.string.isRequired,
        message: PropTypes.object.isRequired,
        shouldScrollMessage: PropTypes.bool,
    };

    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        const { shouldScrollMessage, message, me } = this.props;
        if (shouldScrollMessage || message.getIn(['from', '_id']) === me) {
            scrollMessage = () => this.dom.scrollIntoView(false);
            scrollMessage();
        }
    }

    render() {
        const { me, message } = this.props;
        // 由于scrollMessage的更新是render后做的, 所以此时的scrollMessage是上一条消息的, 因此传递一个箭头函数, 以便调用时使用的是最新的scrollMessage
        const scrollCallback = () => scrollMessage();
        let messageComponent = unknownMessage.render(message, me);
        for (const type of messageTypes) {
            if (type.shouldRender(message.get('type'))) {
                messageComponent = type.render(message, me, scrollCallback);
                break;
            }
        }

        return (
            <div
                className={'message-list-item'}
                ref={dom => this.dom = dom}
            >
                { messageComponent }
            </div>
        );
    }
}

export default {
    container: MessageList,
    item: connect(
        state => ({
            shouldScrollMessage: state.getIn(['pc', 'shouldScrollMessage']),
        })
    )(Message),
};
