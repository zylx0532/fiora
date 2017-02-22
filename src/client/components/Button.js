import React, { Component, PropTypes } from 'react';

class Button extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        code: PropTypes.string,
        onClick: PropTypes.func,
    }
    static defaultProps = {
        width: 22,
        height: 22,
        code: '&#xe604;',
    }
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
        };
    }
    handleClick = (e) => {
        this.setState({ isClick: true });
        setTimeout(() => {
            this.setState({ isClick: false });
        }, 200);
        this.props.onClick(e);
    }
    render() {
        const { width, height, code } = this.props;
        const { isClick } = this.state;
        const minValue = Math.min(width, height);
        return (
            <button
                className={isClick ? 'button click' : 'button'}
                style={{ width, height }}
                onClick={this.handleClick}
            >
                <i
                    className="icon" style={{ fontSize: minValue - 14 }}
                    dangerouslySetInnerHTML={{ __html: code }}
                />
            </button>
        );
    }
}

export default Button;
