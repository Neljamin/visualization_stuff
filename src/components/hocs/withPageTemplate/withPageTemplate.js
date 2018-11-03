import React, { Component } from 'react';
import {
    Header,
    Footer,
    PageContainer,
    PageHeading,
    Navbar,
    NavbarLink
} from '../../presentational';

export function withPageTemplate(WrappedComponent, pageProps) {
    const { title } = pageProps;

    return class extends Component {
        render() {
            return (
                <div>
                    <Header title="Visualization" subtitle='Stuff'/>
                    <Navbar>
                        <NavbarLink exact to='/'>Home</NavbarLink>
                        <NavbarLink to='/lineDancing'>Line Dancing</NavbarLink>
                        <NavbarLink to='/3dDancing'>3D Dancing</NavbarLink>
                    </Navbar>
                    <PageContainer>
                        <PageHeading title={title}/>
                        <WrappedComponent {...this.props} />
                    </PageContainer> 
                    <Footer />
                </div>
            );
        }
    }
}
