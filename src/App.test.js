import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';
import { Switch, Route } from 'react-router-dom'

import App from './App';
import { Header, NavbarLink, Footer } from './components/presentational';
import { NavbarContainer } from './components/container';
import { HomePage } from './components/pages';

Enzyme.configure({ adapter: new Adapter() });

describe('App.js', () => {
    let instance;

    beforeEach(() => {
        instance = mount(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    });
    
    it('renders without crashing', () => {});

    it('renders the Header with correct props', () => {
        const header = instance.find(Header);
        assert.equal(header.prop('title'), 'Visualization');
        assert.equal(header.prop('subtitle'), 'Stuff');
    });

    it('renders the NavbarContainer with the correct NavbarLinks', () => {
        const navbarContainer = instance.find(NavbarContainer);
        assert.isOk(navbarContainer);

        const navbarLinks = navbarContainer.find(NavbarLink);
        assert.equal(navbarLinks.length, 4);

        assert.equal(navbarLinks.at(0).prop('to'), '/');
        assert.equal(navbarLinks.at(0).prop('exact'), true);
        assert.equal(navbarLinks.at(0).text(), 'Home');
        assert.equal(navbarLinks.at(1).prop('to'), '/lineDancing');
        assert.equal(navbarLinks.at(1).text(), 'Line Dancing');
        assert.equal(navbarLinks.at(2).prop('to'), '/3dDancing');
        assert.equal(navbarLinks.at(2).text(), '3D Dancing');
        assert.equal(navbarLinks.at(3).prop('to'), '/circleDancing');
        assert.equal(navbarLinks.at(3).text(), 'Circle Dancing');
    });

    it('renders the Switch with only the active route rendered', () => {
        const switchWrapper = instance.find(Switch);
        assert.isOk(switchWrapper);

        const routes = switchWrapper.find(Route);
        assert.equal(routes.length, 1);

        assert.equal(routes.at(0).prop('path'), '/');
        assert.equal(routes.at(0).prop('component'), HomePage);
    });

    it('renders the Footer with the correct props', () => {
        const footer = instance.find(Footer);

        assert.isOk(footer);
        assert.equal(footer.prop('company'), 'Aodhagán Murphy');
    });
});


