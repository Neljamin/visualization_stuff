import _ from 'lodash';
import * as THREE from 'three';
import React, { Component } from 'react';

import { withPageTemplate } from '../../hocs/withPageTemplate/withPageTemplate';
import { ThreeJsContainer } from '../../container';
import { Loader } from '../../presentational';
import { AudioContainer } from '../../container';

class ThreeJsDancingPage extends Component {
    state = {
        loading: true
    }

    static defaultProps = {
        chunkSize: 32
    };

    componentDidMount() {
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: '#433F81', wireframe: true });
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
        cube.scale.y = newScale + 0.01;
    }

    render () {
        const { loading, cube } = this.state;
        const { chunkSize } = this.props;

        return (
            <Loader loading={loading}>
                <AudioContainer
                    chunkSize={chunkSize}
                    src='./assets/music/music2.mp3'
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
