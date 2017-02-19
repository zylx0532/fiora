import React, { Component } from 'react';
import { Layout, Input } from 'antd';

import 'next/styles/header.less';

const { Header } = Layout;
const Search = Input.Search;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputFocus: false,
        };
    }
    handleInputFocus = () => {
        this.setState({ searchInputFocus: true });
    }
    handleInputBlur = () => {
        console.log('blur');
        this.setState({ searchInputFocus: false });
    }
    render() {
        const { searchInputFocus } = this.state;
        return (
            <Header className="header">
                <div className="logo">
                    <img src={require('assets/images/logo.png')} alt="logo" />
                </div>
                <div className="function">
                    <Search
                        className={searchInputFocus ? 'input-focus' : ''} placeholder="搜索用户 / 群组"
                        onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}
                    />
                </div>
            </Header>
        );
    }
}

export default AppHeader;
