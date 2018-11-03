import React, { Component } from 'react';
import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import _ from 'lodash';
import styled from 'styled-components';
import AudioContainer from '../../container/AudioContainer';

class LineDancingPage extends Component {
    static defaultProps = {
        chunkSize: 16,
        boxWidth: 100 / 16
    };

    state = {
        averageFrequencies: []
    };
    
    draw = (dataArray) => {
        const { chunkSize } = this.props;
        const chunks = dataArray.length / chunkSize;
        const frequencyChunks = _.chunk(dataArray, chunks);
        const averageFrequencies = frequencyChunks.map(chunk => _.sum(chunk) / chunks);
        this.setState({ averageFrequencies });
    }

    render () {
        const { averageFrequencies } = this.state;
        const { boxWidth, chunkSize } = this.props;

        return (
            <div>
                <AudioContainer
                    chunkSize={chunkSize}
                    src='./assets/music/music.mp3'
                    newFrameCallback={this.draw}
                />
                <DancingBoxContainer>
                {
                    averageFrequencies.map((averageFrequency, index) => 
                        <DancingBox
                            key={index}
                            height={averageFrequency}
                            width={boxWidth}
                        />
                    )
                }
                </DancingBoxContainer>
            </div>
        );
    }
}

const DancingBoxContainer = styled.div`
    display: inline-flex;
    width: 100%;
`;

const DancingBox = styled.div.attrs({
        style: ({ height, width }) => ({
            height: `${height}px`,
            width: `${width}%`
        }),
    })`
    background: var(--app-main-color);
    min-height: 10px;
    max-height: 200px;
`;


const pageProps = {
    title: 'Click play to watch the lines dance'
};

export default withPageTemplate(LineDancingPage, pageProps);
