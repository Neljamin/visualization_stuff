import React, { Component } from 'react';
import styled from 'styled-components';

import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import { ProjectThumbnailContainer } from '../../container';
import homePageProjectThumbnails from './homePageThumbnails.json';

class HomePage extends Component {
    static defaultProps = {
        projectThumbnailSize: 300
    };

    render () {
        const { projectThumbnailSize } = this.props;

        return (
            <HomePageProjectThumbnails>
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
            </HomePageProjectThumbnails>
        );
    }
}

const HomePageProjectThumbnails = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const pageProps = {
    title: "Here are a couple of things that I've messed around with Audio Visualization"
};

export default withPageTemplate(HomePage, pageProps);
