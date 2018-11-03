import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectThumbnail  = ({
    to,
    src,
    alt,
    size,
    title
}) => {
    return (
        <Link to={to}>
            <StyledProjectThumbnailContainer
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
            </StyledProjectThumbnailContainer>
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


const StyledProjectThumbnailContainer = styled.div`
    border: solid var(--app-main-color) 1px;
    margin: 8px 0;
    position: relative;
    filter: grayscale(50%);
    &:hover {
        filter: none;
    }
    
    ${props => props.size && css`
        width: ${props.size}px;
        height: ${props.size}px;
    `}
`;


export default ProjectThumbnail;