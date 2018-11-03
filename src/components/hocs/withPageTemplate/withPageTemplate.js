import React, { Component } from 'react';
import {
    Footer,
    PageContainer,
    PageHeading
} from '../../presentational';

export function withPageTemplate(WrappedComponent, pageProps) {
    const { title } = pageProps;

    return class extends Component {
        render() {
            return (
                <div>
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
