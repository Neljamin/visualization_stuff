import React, { Component } from 'react';
import styled from 'styled-components';

export default class AudioContainer extends Component {
    static defaultProps = {
        chunkSize: 32,
        fps: 20,
        newFrameCallback: () => {}
    };

    componentDidMount() {
        const { fps } = this.props;

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const myAudio = document.querySelector('audio');
        const source = audioCtx.createMediaElementSource(myAudio);
        const analyser = audioCtx.createAnalyser();
        const gainNode = audioCtx.createGain();
    
        analyser.fftSize = 2048;
        analyser.minDecibels = -200;
        analyser.maxDecibels = -5;
        analyser.smoothingTimeConstant = 0.85
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);
    
        source.connect(analyser);
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        this.setState({
            analyser,
            dataArray
        });

        this.onNewFrameAtFps = setInterval(() => this.onNewFrame(), fps);
    }

    componentWillUnmount() {
        clearInterval(this.onNewFrameAtFps);
    }
    
    onNewFrame = () => {
        const { dataArray, analyser } = this.state;
        const { newFrameCallback } = this.props;
        if (!analyser) {
            return;
        }
        analyser.getByteFrequencyData(dataArray);
        newFrameCallback(dataArray);
    }

    render () {
        const { src } = this.props;
        return (
            <StyledAudio src={src} controls />
        );
    }
}

const StyledAudio = styled.audio`
    width: 100%;
`;

