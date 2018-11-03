import React, { Component } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

class ThreeJsContainer extends Component{
    static defaultProps = {
        width: 300,
        height: 200,
        animate: () => {},
        sceneObjects: []
    };

    componentDidMount(){
        const { width, height, sceneObjects } = this.props;

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.y = 1;
        camera.position.z = 4;

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setClearColor('#FFFFFF')
        renderer.setSize(width, height)
        this.threeJsContainerRef.appendChild(renderer.domElement)

        sceneObjects.forEach(sceneObject => scene.add(sceneObject));

        this.setState({
            scene,
            camera,
            renderer
        });

        requestAnimationFrame(this.animate);
    }

    componentWillUnmount() {
        const { renderer } = this.state;
        cancelAnimationFrame(this.frameId);
        this.threeJsContainerRef.removeChild(renderer.domElement);
    }

    animate = () => {
        const {
            renderer,
            scene,
            camera
        } = this.state;
        const { animate } = this.props;

        animate();
        renderer.render(scene, camera);
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene = () => {
        const { renderer, scene, camera } = this.state;
        renderer.render(scene, camera);
    }

    render(){
        return (
            <ThreeJsStyledContainer
                ref={(threeJsContainerRef) => { this.threeJsContainerRef = threeJsContainerRef }}
            />
        );
    }
}

const ThreeJsStyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default ThreeJsContainer;