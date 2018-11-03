import React, { Component } from 'react';
import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import ThreeJsContainer from '../../container/ThreeJsContainer';
import Loader from '../../container/Loader';
import * as THREE from 'three';
import AudioContainer from '../../container/AudioContainer';
import _ from 'lodash';

class ThreeJsDancingPage extends Component {
    state = {
        loading: true
    }

    static defaultProps = {
        chunkSize: 32
    };

    componentDidMount() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: '#433F81'});
        const cube = new THREE.Mesh(geometry, material);
        this.setState({ cube, loading: false });
    }

    animate = () => {
        const { cube } = this.state;
        cube.rotation.y += 0.01;
    }

    updateCubeSize = (dataArray) => {
        const { cube } = this.state;

        const averageFrequency = _.sum(dataArray) / dataArray.length;
        const newScale = averageFrequency / 64;
        cube.scale.y = newScale;
    }

    render () {
        const { loading, cube } = this.state;
        const { chunkSize } = this.props;

        return (
            <Loader loading={loading}>
                <AudioContainer
                    chunkSize={chunkSize}
                    src='./assets/music2.mp3'
                    newFrameCallback={this.updateCubeSize}
                />
                <ThreeJsContainer
                    sceneObjects={[ cube ]}
                    animate={this.animate}
                />
            </Loader>
        );
    }
}

const pageProps = {
    title: 'Dancing in 3D'
};

export default withPageTemplate(ThreeJsDancingPage, pageProps);
