import React, { PropTypes } from 'react';
import autoBind from 'autobind-decorator';
import pureRender from 'pure-render-decorator';

import './chatPanelHeader.scss';

import ui from '../../../action/pc';
import user from '../../../action/user';
import mask from '../../../util/mask';
import Avatar from '../../../common/avatar';

@pureRender
class ChatPanelHeader extends React.Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        linkmanId: PropTypes.string,
    };

    @autoBind
    onGroupNoticeClick() {
        ui.openGroupNotice();
        mask(ui.closeGroupNotice);
    }

    @autoBind
    onGroupSettingClick() {
        user.getGroupInfo(this.props.linkmanId);
        ui.openGroupSetting();
        mask(ui.closeGroupSetting);
    }

    render() {
        const { avatar, name, type } = this.props;

        return (
            <div className="chat-panel-header">
                <div>
                    <Avatar
                        width={40}
                        height={40}
                        avatar={avatar}
                        name={name}
                    />
                    <p>{ name }</p>
                </div>
                {
                    type === 'group' ?
                        <div>
                            <div>
                                <i
                                    className="icon"
                                    title="公告"
                                    onClick={this.onGroupNoticeClick}
                                >&#xe60a;</i>
                            </div>
                            <div>
                                <i
                                    className="icon"
                                    title="关于"
                                    onClick={this.onGroupSettingClick}
                                >&#xe609;</i>
                            </div>
                        </div>
                    :
                        null
                }
            </div>
        );
    }
}

export default ChatPanelHeader;
