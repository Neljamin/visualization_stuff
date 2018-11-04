import React, { Component } from 'react';
import classNames from 'classnames';

import './NavbarContainer.scss';

export default class NavbarContainer extends Component {
    state = {
        opened: true
    }

    toggleOpened = () => {
        const { opened } = this.state;
        this.setState({ opened: !opened });
    }

    render() {
        const { children } = this.props;
        const { opened } = this.state;
        
        const navbarLinksClassNames = ['navbarLinks'];
        if (opened) {
            navbarLinksClassNames.push('open');
        }
        const navbarLinksClassName = classNames(...navbarLinksClassNames);

        return (
            <div className='navbarContainer'>
                <div className='navbarToggle' onClick={this.toggleOpened}>
                    {opened && <i className="fas fa-caret-down"/>}
                    {!opened && <i className="fas fa-caret-up"/>}
                </div>
                <div className={navbarLinksClassName}>
                    {children}
                </div>
            </div>
        );
    }
}