import React, { Component } from 'react';
import {
    Header,
    Footer,
    PageContainer,
    PageHeading,
    Navbar
} from '../../presentational';
import { Link } from 'react-router-dom';

export function withPageTemplate(WrappedComponent, pageProps) {
    const { title } = pageProps;

    return class extends Component {
        render() {
            return (
                <div>
                    <Header title='This is 3D Dancer'/>
                    <PageContainer>
                        <Navbar>
                            <Link to='/'>Home</Link>
                            <Link to='/cubeDancing'>Cube Dancing</Link>
                            <Link to='/3dDancing'>3D Dancing</Link>
                        </Navbar>
                        <PageHeading title={title}/>
                        <WrappedComponent {...this.props} />
                    </PageContainer> 
                    <Footer />
                </div>
            );
        }
    }
}
