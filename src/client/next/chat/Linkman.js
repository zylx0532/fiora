import React, { Component } from 'react';
import Avatar from 'components/Avatar';

class LinkManItem extends Component {
    render() {
        return (
            <div
                className="item"
                onClick={this.handleUserListItemClick}
            >
                <Avatar
                    className="avatar"
                    width={40} height={40}
                />
                <div className="content">
                    <div className="nick-time flex-row">
                        <p>{ '碎碎酱' }</p>
                        <p>{ '12:34' }</p>
                    </div>
                    <div className="text">
                        <p>{ '呵呵呵的内容, 特别长的怎么办呢啊啊啊啊啊' }</p>
                    </div>
                </div>
            </div>
        );
    }
}

class LinkMan extends Component {
    render() {
        return (
            <div className="linkman">
                <LinkManItem />
                <LinkManItem />
                <LinkManItem />
            </div>
        );
    }
}

export default LinkMan;
