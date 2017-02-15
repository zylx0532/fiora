import React, { Component } from 'react';
import { DatePicker } from 'antd';

import 'normalize.css';
import 'next/styles/app.less';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Ant Design 组件测试</h1>
                <DatePicker />
            </div>
        );
    }
}

export default App;
