import React, { Component } from 'react';
import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import styled from 'styled-components';
import AudioContainer from '../../container/AudioContainer';
import _ from 'lodash';

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
            <CircleDancingPageContainer>
                <AudioContainer
                    chunkSize={chunkSize}
                    src='./assets/music/music3.mp3'
                    newFrameCallback={this.draw}
                />
                <DancingCircleContainer>
                    <Circle>
                        {
                            averageFrequencies.map((averageFrequency, index) => 
                                <Line
                                    key={index}
                                    height={averageFrequency}
                                    rotation={(360 / averageFrequencies.length) * index}
                                />
                            )
                        }
                    </Circle>
                </DancingCircleContainer>
            </CircleDancingPageContainer>
        );
    }
}

const CircleDancingPageContainer = styled.div`
    min-height: 400px;
`;

const DancingCircleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

const Line = styled.div.attrs({
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

const Circle = styled.div`
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
