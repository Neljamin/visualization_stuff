import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectThumbnailContainer  = ({
    to,
    src,
    alt,
    size,
    title
}) => {
    return (
        <Link to={to}>
            <StyledProjectThumbnailWrapper
                size={size}
            >
                <StyledProjectTitle>
                    <h3>{title}</h3>
                </StyledProjectTitle>
                <img
                    src={src}
                    alt={alt}
                    height={size}
                    width={size}
                />
            </StyledProjectThumbnailWrapper>
        </Link>
    );
};

const StyledProjectTitle = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    text-shadow: 2px 2px 0px rgba(0,0,0,0.5);
`;

const StyledProjectThumbnailWrapper = styled.div`
    border: solid var(--app-main-color) 1px;
    position: relative;
    filter: grayscale(50%);
    justify-content: center;
    display: flex;
    width: 100%;
    height: 300px;
    &:hover {
        filter: none;
    }
    
    ${props => props.size && css`
        height: ${props.size}px;
    `}
`;


export default ProjectThumbnailContainer;