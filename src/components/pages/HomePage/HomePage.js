import React, { Component } from 'react';
import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import { ProjectThumbnail } from '../../presentational';
import styled from 'styled-components';

class HomePage extends Component {
    render () {
        return (
            <HomePageProjectThumbnails>
                <ProjectThumbnail
                    to='/lineDancing'
                    title="Bar Dancing Thing"
                    size={300}
                    src="./assets/images/bar-dancing.png"
                    alt="Bar Dancing Thing"
                />
                <ProjectThumbnail
                    to='/3dDancing'
                    title="3D Cube Dancing Thing"
                    size={300}
                    src="./assets/images/cube-dancing.png"
                    alt="3D Cube Dancing Thing"
                />
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
