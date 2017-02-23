import React, { Component } from 'react';
import { Layout, Input } from 'antd';
import Button from 'components/Button';
import MessageList from './MessageList';

class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSlideShowed: true,
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
                    <div className="form-input">
                        <div>
                            <Button
                                width={40} height={40} code="&#xe604;"
                                onClick={() => console.log(111)}
                            />
                            <Button
                                width={40} height={40} code="&#xe605;"
                                onClick={() => console.log(111)}
                            />
                            <Button
                                width={40} height={40} code="&#xe602;"
                                onClick={() => console.log(111)}
                            />
                            <div>
                                <Input placeholder="说点什么吧~" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isSlideShowed ? 'chat-form-slide show' : 'chat-form-slide'}>
                    <div className="content">
                        <div className="block bulletin">
                            <h2>公告</h2>
                            <div>
                                <p>
                                    这里是公告的内容, 应该会有很多内容的样子
                                </p>
                            </div>
                        </div>
                        <div className="block online-list">
                            <h2>在线用户</h2>
                            <div>
                                <ul>
                                    <li>
                                        <div>
                                            <img
                                                className="avatar-image"
                                                src="http://ooo.0o0.ooo/2016/10/16/5803453dda3f9.gif?imageView2/2/w/40/h/40"
                                            />
                                            <span>碎碎酱</span>
                                        </div>
                                        <i className="icon">&#xe651;</i>
                                    </li>
                                    <li>
                                        <div>
                                            <img
                                                className="avatar-image"
                                                src="http://ooo.0o0.ooo/2016/10/16/5803453dda3f9.gif?imageView2/2/w/40/h/40"
                                            />
                                            <span>碎碎酱的小跟班</span>
                                        </div>
                                        <i className="icon">&#xe61c;</i>
                                    </li>
                                    <li>
                                        <div>
                                            <img
                                                className="avatar-image"
                                                src="http://ooo.0o0.ooo/2016/10/16/5803453dda3f9.gif?imageView2/2/w/40/h/40"
                                            />
                                            <span>blackmiaool</span>
                                        </div>
                                        <i className="icon">&#xe63a;</i>
                                    </li>
                                    <li>
                                        <div>
                                            <img
                                                className="avatar-image"
                                                src="http://ooo.0o0.ooo/2016/10/16/5803453dda3f9.gif?imageView2/2/w/40/h/40"
                                            />
                                            <span>碎碎酱</span>
                                        </div>
                                        <i className="icon">&#xe618;</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ChatForm;
