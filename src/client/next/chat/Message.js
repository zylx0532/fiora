import React, { Component, PropTypes } from 'react';

/* class Tag extends Component {
    static propTypes = {
        children: PropTypes.string,
        color: PropTypes.string,
    }
    render() {
        const { color } = this.props;
        return (
            <div className="tag" style={{ backgroundColor: color }}>
                { this.props.children }
            </div>
        );
    }
}*/

class Message extends Component {
    static propTypes = {
        self: PropTypes.bool,
    }
    render() {
        const { self } = this.props;
        return (
            <div className="message self">
                <div className={self ? 'native-message message-self' : 'native-message'}>
                    <img
                        className="avatar-image" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, cursor: 'pointer' }}
                        src="http://ooo.0o0.ooo/2016/10/16/5803453dda3f9.gif?imageView2/2/w/40/h/40"
                    />
                    <div className="message-content">
                        <div className="nick-time">
                            <span className="message-username">blackmiaool</span>
                            <span>21:35</span>
                        </div>
                        <div className="text">
                            <img
                                className="expression-default-message" alt="#(滑稽)"
                                src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw=="
                                style={{ backgroundPosition: 'left -720px', backgroundImage: 'url(http://assets.suisuijiang.com/images/expressions.73fca.png)' }}
                            />
                            然而并没有多大用
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;
