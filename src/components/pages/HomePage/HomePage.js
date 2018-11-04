import React, { Component } from 'react';

import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import { ProjectThumbnailContainer } from '../../container';
import { Grid } from '../../presentational';
import homePageProjectThumbnails from './homePageThumbnails.json';

class HomePage extends Component {
    static defaultProps = {
        projectThumbnailSize: 300
    };

    render () {
        const { projectThumbnailSize } = this.props;

        return (
            <Grid columns={2} mobileColumns={1}>
            {
                homePageProjectThumbnails.map(({ link, title, image }) => 
                    <ProjectThumbnailContainer
                        key={title}
                        to={link}
                        title={title}
                        size={projectThumbnailSize}
                        src={image}
                        alt={title}
                    />
                )
            }
            </Grid>
        );
    }
}

const pageProps = {
    title: "Here are a couple of things that I've messed around with Audio Visualization"
};

export default withPageTemplate(HomePage, pageProps);
