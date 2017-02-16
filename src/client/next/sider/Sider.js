import React, { Component } from 'react';
import { Menu, Layout } from 'antd';

const { Sider } = Layout;

import 'next/styles/sider.less';

class AppSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    handleCollapseChange = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        const { collapsed } = this.state;
        return (
            <Sider
                className="sider" width={240} collapsedWidth={56}
                collapsed={collapsed} onCollapse={this.handleCollapseChange}
                collapsible defaultCollapsed
            >
                <Menu
                    className={collapsed ? 'collapsed sider' : 'sider'}
                    theme="dark" mode="inline"
                >
                    <Menu.Item key="1">
                        <i className="icon">&#xe607;</i>
                        <span className="nav-text">聊天</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <i className="icon">&#xe600;</i>
                        <span className="nav-text">联系人</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <i className="icon">&#xe606;</i>
                        <span className="nav-text">系统设置</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default AppSider;
