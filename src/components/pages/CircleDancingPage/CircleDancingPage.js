import React, { Component } from 'react';
import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';

class CircleDancingPage extends Component {
    render () {
        return (
            <div>
                
            </div>
        );
    }
}

const pageProps = {
    title: "A circle dancing... of course"
};

export default withPageTemplate(CircleDancingPage, pageProps);
