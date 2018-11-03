import React, { Component } from 'react';
import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';

class HomePage extends Component {
    render () {
        return (
            <div>
                
            </div>
        );
    }
}

const pageProps = {
    title: "Here are a couple of things that I've messed around with Audio Visualization"
};

export default withPageTemplate(HomePage, pageProps);
