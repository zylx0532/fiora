import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import autoBind from 'autobind-decorator';
import pureRender from 'pure-render-decorator';

import './expression.scss';

import ui from '../../../action/pc';
import user from '../../../action/user';
import expressions from '../../../util/expressions';
import send from '../../../util/send';


@pureRender
class Expression extends React.Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        userExpressions: PropTypes.object,
        linkmanType: PropTypes.string.isRequired,
        linkmanId: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { page: 'default' };
    }

    @autoBind
    handleClick(value) {
        ui.insertText(`#(${value})`);
        ui.closeExpression();
        ui.closeMaskLayout();
    }

    @autoBind
    handleCollectExpressionClick(src) {
        const { linkmanType, linkmanId } = this.props;
        send(linkmanType, linkmanId, 'image', src);
        ui.closeExpression();
        ui.closeMaskLayout();
    }

    @autoBind
    handleCollectExpressionDelete(src) {
        user.deleteUserExpression(src);
    }

    @autoBind
    renderDefaultExpression() {
        return (
            <div className="default-expression">
                {
                expressions.map((e, index) => (
                    <div
                        key={index}
                        onClick={() => this.handleClick(e)}
                    >
                        <div style={{ backgroundPosition: `left ${-30 * index}px` }} />
                    </div>
                ))
            }
            </div>
        );
    }

    @autoBind
    renderCollectExpression() {
        const { userExpressions } = this.props;

        return (
            <div className="collect-expression">
                {
                userExpressions.map((e, index) => (
                    <div key={index}>
                        <i
                            className="icon"
                            onClick={() => this.handleCollectExpressionDelete(e)}
                        >&#xe603;</i>
                        <div
                            style={{ backgroundImage: `url(${e})` }}
                            onClick={() => this.handleCollectExpressionClick(e)}
                        />
                    </div>
                ))
            }
            </div>
        );
    }

    render() {
        const { page } = this.state;
        const { show } = this.props;
        return (
            <Motion
                defaultStyle={{ scale: 0.4, opacity: 0 }}
                style={{ scale: spring(show ? 1 : 0.4), opacity: spring(show ? 1 : 0) }}
            >
                {
                ({ scale, opacity }) => (
                    <div
                        className="expression"
                        style={{ opacity, transform: `scale(${scale})`, display: opacity === 0 ? 'none' : 'block' }}
                    >
                        { page === 'default' ? this.renderDefaultExpression() : this.renderCollectExpression() }
                        <div>
                            <div
                                className={page === 'default' ? 'selected' : ''}
                                onClick={() => this.setState({ page: 'default' })}
                            >
                                <img src={'http://assets.suisuijiang.com/default-expression.png'} />
                            </div>
                            <div
                                className={page === 'collect' ? 'selected' : ''}
                                onClick={() => this.setState({ page: 'collect' })}
                            >
                                <img src={'http://assets.suisuijiang.com/collect-expression.png'} />
                            </div>
                        </div>
                    </div>
                )
            }
            </Motion>
        );
    }
}

export default connect(
    state => ({
        show: state.getIn(['pc', 'showExpression']),
        userExpressions: state.getIn(['user', 'expressions']),
    })
)(Expression);
