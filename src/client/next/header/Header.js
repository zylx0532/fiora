import React, { Component } from 'react';
import { Layout } from 'antd';

import 'next/styles/header.less';

const { Header } = Layout;

class AppHeader extends Component {
    render() {
        return (
            <Header className="header">
                <div className="user">
                    用户信息
                </div>
                <div className="function">
                    功能区
                </div>
                <div className="logo">
                    <img src={require('assets/images/logo.png')} alt="logo" />
                </div>
            </Header>
        );
    }
}

export default AppHeader;
