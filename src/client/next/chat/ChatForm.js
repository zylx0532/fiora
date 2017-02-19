import React, { Component } from 'react';
import { Layout, Button, Icon } from 'antd';

const { Content } = Layout;

class ChatForm extends Component {
    render() {
        return (
            <Layout className="chat-form">
                <div className="form-header">
                    <span className="name">Fiora</span>
                    <div className="buttons">
                        <Icon type="left-square-o" />
                        <Button shape="circle">
                            <i className="icon">&#xe60a;</i>
                        </Button>
                        <Button shape="circle">
                            <i className="icon">&#xe609;</i>
                        </Button>
                    </div>
                </div>
                <Content>消息列表</Content>
                <div>输入区</div>
            </Layout>
        );
    }
}

export default ChatForm;
