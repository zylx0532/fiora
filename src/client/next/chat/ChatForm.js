import React, { Component } from 'react';
import { Layout } from 'antd';
import Button from 'components/Button';
import MessageList from './MessageList';

class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSlideShowed: false,
        };
    }
    handleShowSlideClick = () => {
        this.setState({ isSlideShowed: !this.state.isSlideShowed });
    }
    render() {
        const { isSlideShowed } = this.state;
        return (
            <Layout className="chat-form">
                <div className="chat-form-main">
                    <div className="form-header">
                        <span className="name">Fiora</span>
                        <div className="buttons">
                            <Button
                                width={36} height={36} code="&#xe64c;"
                                onClick={() => console.log(111)}
                            />
                            <Button
                                width={36} height={36} code={isSlideShowed ? '&#xe616;' : '&#xe613;'}
                                onClick={this.handleShowSlideClick}
                            />
                        </div>
                    </div>
                    <MessageList />
                    <div>输入区</div>
                </div>
                <div className={isSlideShowed ? 'chat-form-slide show' : 'chat-form-slide'}>
                    slide
                </div>
            </Layout>
        );
    }
}

export default ChatForm;
