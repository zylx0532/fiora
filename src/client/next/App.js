import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from 'next/header/Header';
import AppSider from 'next/sider/Sider';
import Chat from 'next/chat/Chat';

import 'normalize.css';
import 'next/styles/app.less';

class App extends Component {
    render() {
        return (
            <Layout className="app">
                <Header />
                <Layout className="flex-row">
                    <AppSider />
                    <Chat />
                </Layout>
            </Layout>
        );
    }
}

export default App;
