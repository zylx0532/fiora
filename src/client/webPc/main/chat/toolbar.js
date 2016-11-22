import React, { PropTypes } from 'react';
import autoBind from 'autobind-decorator';
import pureRender from 'pure-render-decorator';

import './toolbar.scss';

import ui from '../../../action/pc';
import mask from '../../../util/mask';
import send from '../../../util/send';

@pureRender
class Toolbar extends React.Component {
    static propTypes = {
        linkmanId: PropTypes.string.isRequired,
    };

    @autoBind
    onExpressionClick() {
        ui.openExpression();
        mask(ui.closeExpression);
    }

    @autoBind
    onCodeClick() {
        ui.openCodeInput();
        mask(ui.closeCodeInput);
    }

    @autoBind
    handleSelectImage() {
        const image = this.image.files[0];
        if (!image) {
            return;
        }

        const reader = new FileReader();
        const instance = this;
        reader.onloadend = function () {
            send(instance.props.linkmanType, instance.props.linkmanId, 'image', this.result);
        };
        reader.readAsDataURL(image);
    }

    renderToolbar() {
        return (
            <div
                className="toolbar"
            >
                <div>
                    <i
                        className="icon"
                        title="表情"
                        onClick={this.onExpressionClick}
                    >&#xe604;</i>
                </div>
                <div>
                    <i
                        className="icon"
                        title="图片"
                        onClick={() => this.image.click()}
                    >&#xe605;</i>
                </div>
                <div>
                    <i
                        className="icon"
                        title="代码"
                        onClick={this.onCodeClick}
                    >&#xe602;</i>
                </div>
                <input
                    className="image-input"
                    type="file"
                    ref={image => this.image = image}
                    accept="image/*"
                    onChange={this.handleSelectImage}
                />
            </div>
        );
    }

    render() {
        return this.renderToolbar();
    }
}

export default Toolbar;
