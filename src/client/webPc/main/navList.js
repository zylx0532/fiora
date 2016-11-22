import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import './navList.scss';

@pureRender
class NavList extends React.Component {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        return (
            <nav className="nav-list">
                { this.props.children }
            </nav>
        );
    }
}

@pureRender
class Nav extends React.Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        selected: PropTypes.bool,
        title: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {
        const { icon, selected, title, onClick } = this.props;
        return (
            <div
                className={`nav-list-item ${selected ? 'selected' : ''}`}
                title={title}
                onClick={onClick}
            >
                <i className="icon">{ icon }</i>
            </div>
        );
    }
}

export default {
    container: NavList,
    item: Nav,
};
