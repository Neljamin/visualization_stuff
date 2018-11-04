import React from 'react';
import styled, { css } from 'styled-components';
import './Grid.scss';

const getGridTemplateColumns = (columns) => {
    let gridTemplateColumns = '1fr';
    if (columns > 1) {
        gridTemplateColumns = '1fr '.repeat(columns).trim()
    }
    return gridTemplateColumns;
}

const Grid = ({
    children,
    columns = 1,
    mobileColumns = 1
}) => {
    const gridTemplateColumns = getGridTemplateColumns(columns);
    const gridTemplateColumnsMobile = getGridTemplateColumns(mobileColumns);

    return (
        <div>
            <StyledGrid gridTemplateColumns={gridTemplateColumns} className='grid'>
                {children}
            </StyledGrid>
            <StyledGrid gridTemplateColumns={gridTemplateColumnsMobile} className='gridMobile'>
                {children}
            </StyledGrid>
        </div>
    );
}

const StyledGrid = styled.div`
    column-gap: 8px;
    row-gap: 8px;
    ${props => props.gridTemplateColumns && css`
        grid-template-columns: ${props.gridTemplateColumns};
    `}
`;

export default Grid;