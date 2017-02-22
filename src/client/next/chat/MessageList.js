import React, { Component } from 'react';
import { Layout } from 'antd';
import Message from './Message';

const { Content } = Layout;

class MessageList extends Component {
    render() {
        return (
            <Content className="chat-message-list">
                <Message />
                <Message />
                <Message />
                <Message self />
                <Message />
                <Message />
                <Message self />
                <Message />
                <Message />
                <Message self />
                <Message />
                <Message />
                <Message self />
                <Message />
                <Message />
                <Message self />
                <Message />
                <Message />
                <Message self />
            </Content>
        );
    }
}

export default MessageList;
