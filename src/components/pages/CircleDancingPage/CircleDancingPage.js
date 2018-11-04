import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import { AudioContainer } from '../../container';

class CircleDancingPage extends Component {
    static defaultProps = {
        chunkSize: 32,
        scalar: 0.5
    };

    state = {
        averageFrequencies: []
    }

    draw = (dataArray) => {
        const { chunkSize, scalar } = this.props;
        const chunks = dataArray.length / chunkSize;
        const frequencyChunks = _.chunk(dataArray, chunks);
        const averageFrequencies = frequencyChunks.map(chunk => (scalar * _.sum(chunk)) / chunks);
        this.setState({ averageFrequencies });
    }

    render () {
        const { chunkSize } = this.props;
        const { averageFrequencies } = this.state;
        return (
            <div>
                <AudioContainer
                    chunkSize={chunkSize}
                    src='./assets/music/music3.mp3'
                    newFrameCallback={this.draw}
                />
                <DancingCircleWrapper>
                    <DancingCircle>
                        {
                            averageFrequencies.map((averageFrequency, index) => 
                                <DancingCircleLine
                                    key={index}
                                    height={averageFrequency}
                                    rotation={(360 / averageFrequencies.length) * index}
                                />
                            )
                        }
                    </DancingCircle>
                </DancingCircleWrapper>
            </div>
        );
    }
}

const DancingCircleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

const DancingCircleLine = styled.div.attrs({
        style: ({ height, rotation }) => ({
            height: `${height}px`,
            transform: `rotate(${rotation}deg)`
        }),
    })`
    min-height: 20px;
    max-height: 100px;
    position: absolute;
    top: 100px;
    left: 100px;
    height: 20px;
    width: 1px;
    background-color: black;
    transform-origin: top;
`;

const DancingCircle = styled.div`
    position: relative;
    height: 200px;
    width: 200px;
    background-color: var(--app-main-color);
    border-radius: 50%;
    animation:spin 4s linear infinite;
    @keyframes spin { 100% { transform:rotate(360deg); } }
`;

const pageProps = {
    title: "A circle dancing... of course"
};

export default withPageTemplate(CircleDancingPage, pageProps);
