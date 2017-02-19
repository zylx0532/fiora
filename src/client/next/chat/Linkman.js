import React, { Component, PropTypes } from 'react';
import Avatar from 'components/Avatar';

class LinkManItem extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        focus: PropTypes.bool,
        onClick: PropTypes.func,
    }
    handleClick = () => {
        const { index, onClick } = this.props;
        onClick(index);
    }
    render() {
        const { focus } = this.props;
        return (
            <div
                className={focus ? 'item focus' : 'item'}
                onClick={this.handleClick}
            >
                <div>
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
            </div>
        );
    }
}

class LinkMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusIndex: 0,
        };
    }
    handleLinkmanClick = (index) => {
        this.setState({ focusIndex: index });
    }
    render() {
        const { focusIndex } = this.state;
        return (
            <div className="linkman">
                <LinkManItem
                    index={0} focus={focusIndex === 0}
                    onClick={this.handleLinkmanClick}
                />
                <LinkManItem
                    index={1} focus={focusIndex === 1}
                    onClick={this.handleLinkmanClick}
                />
                <LinkManItem
                    index={2} focus={focusIndex === 2}
                    onClick={this.handleLinkmanClick}
                />
            </div>
        );
    }
}

export default LinkMan;
