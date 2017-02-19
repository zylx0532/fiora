import React, { Component } from 'react';
import { Layout } from 'antd';
import Button from 'components/Button';
import MessageList from './MessageList';

class ChatForm extends Component {
    render() {
        return (
            <Layout className="chat-form">
                <div className="form-header">
                    <span className="name">Fiora</span>
                    <div className="buttons">
                        <Button
                            width={36} height={36} code="&#xe64c;"
                            onClick={() => console.log(111)}
                        />
                        <Button
                            width={36} height={36} code="&#xe613;"
                            onClick={() => console.log(111)}
                        />
                    </div>
                </div>
                <MessageList />
                <div>输入区</div>
            </Layout>
        );
    }
}

export default ChatForm;
