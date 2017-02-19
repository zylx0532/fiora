import React, { Component } from 'react';
import { Layout, Dropdown, Menu, Input } from 'antd';
import Avatar from 'components/Avatar';

import 'next/styles/header.less';

const { Header } = Layout;
const Search = Input.Search;

function handleMenuClick({ key }) {
    console.log(`click at ${key}`);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <p>个人设置</p>
        </Menu.Item>
        <Menu.Item key="2">
            <p>退出登录</p>
        </Menu.Item>
    </Menu >
);

class AppHeader extends Component {
    render() {
        return (
            <Header className="header">
                <div className="user">
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <div>
                            <Avatar width={44} height={44} />
                            <p className="nick">碎碎酱</p>

                        </div>
                    </Dropdown>
                </div>
                <div className="function">
                    <Search
                        placeholder="input search text"
                        style={{ width: 200 }}
                        onSearch={value => console.log(value)}
                    />
                </div>
                <div className="logo">
                    <img src={require('assets/images/logo.png')} alt="logo" />
                </div>
            </Header>
        );
    }
}

export default AppHeader;
