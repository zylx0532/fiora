import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import pureRender from 'pure-render-decorator';

import './inputForm.scss';

@pureRender
class InputForm extends React.Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        title: PropTypes.string,
        onClick: PropTypes.func,
        onClose: PropTypes.func,
    };

    render() {
        const { show, title, onClick, onClose } = this.props;

        return (
            <Motion
                defaultStyle={{ scale: 0.4, opacity: 0 }}
                style={{ scale: spring(show ? 1 : 0.4), opacity: spring(show ? 1 : 0) }}
            >
                {
                ({ scale, opacity }) => (
                    <div
                        className="input-form"
                        style={{ opacity, transform: `scale(${scale})`, display: opacity === 0 ? 'none' : 'flex' }}
                    >
                        <div>
                            <span>{ title }</span>
                            <i
                                className="icon"
                                onClick={onClose}
                            >&#xe603;</i>
                        </div>
                        <div>
                            <input
                                type="text"
                                ref={input => this.input = input}
                            />
                            <button
                                onClick={() => onClick(this.input.value)}
                            >确定</button>
                        </div>
                    </div>
                )
            }
            </Motion>
        );
    }
}

export default InputForm;
