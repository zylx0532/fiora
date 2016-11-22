import React, { PropTypes } from 'react';
import autoBind from 'autobind-decorator';
import pureRender from 'pure-render-decorator';

import './header.scss';

import Logo from './logo';
import NavList from './navList';
import UserPanel from './userPanel';
import ui from '../../action/pc';
import mask from '../../util/mask';

@pureRender
class Header extends React.Component {
    static propTypes = {
        pathname: PropTypes.string,
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }

    @autoBind
    handleSettingClick() {
        ui.openSystemSetting();
        mask(ui.closeSystemSetting);
    }

    render() {
        const { pathname } = this.props;

        return (
            <header>
                <Logo />
                <NavList.container>
                    <NavList.item
                        icon="&#xe607;"
                        title="聊天"
                        onClick={() => this.context.router.push('/main/chat')}
                        selected={/^\/main\/chat|\/main$/.test(pathname)}
                    />
                    <NavList.item
                        icon="&#xe600;"
                        title="联系人"
                        onClick={() => this.context.router.push('/main/manage')}
                        selected={/^\/main\/manage$/.test(pathname)}
                    />
                    <NavList.item
                        icon="&#xe606;"
                        title="系统设置"
                        onClick={this.handleSettingClick}
                    />
                </NavList.container>
                <UserPanel />
            </header>
        );
    }
}

export default Header;
