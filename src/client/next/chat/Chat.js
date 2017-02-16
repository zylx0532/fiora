import React, { Component } from 'react';
import { Layout } from 'antd';
import Linkman from 'next/chat/Linkman';
import ChatForm from 'next/chat/ChatForm';

import 'next/styles/chat.less';

class Chat extends Component {
    render() {
        return (
            <Layout className="flex-row">
                <Linkman />
                <ChatForm />
            </Layout>
        );
    }
}

export default Chat;
