import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from 'next/header/Header';
import AppSider from 'next/sider/Sider';

const { Content } = Layout;

import 'normalize.css';
import 'next/styles/app.less';

class App extends Component {
    render() {
        return (
            <Layout className="app">
                <Header />
                <Layout className="row">
                    <AppSider />
                    <Content>Content</Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
