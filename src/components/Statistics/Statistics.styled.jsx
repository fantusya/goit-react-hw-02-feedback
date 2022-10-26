import styled from "styled-components";

export const StatisticsTitle = styled.h2`
    margin-bottom: ${props => props.theme.space[5]}px;

    font-size: ${props => props.theme.fontSizes.l};
    letter-spacing: 0.03em;
    
    color: ${props => props.theme.colors.text};
    text-shadow: 1px 1px 1px rgba(0,0,0,0.6);
`;

export const StatisticsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
`;

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.theme.space[4]}px;
    min-width: 170px;

    font-size: ${props => props.theme.fontSizes.ml};
    font-weight: ${props => props.theme.fontWeights.bold}; 

    color: ${props => props.theme.colors.accent}; 
`;

export const StatisticsValue = styled.span`
    display: inline-block;
    padding: 5px 15px;

    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.ml};
    font-style: normal; 

    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.accent};
    border: ${props => props.theme.borders.normal} ${props => props.theme.colors.golden};
    border-radius: ${props => props.theme.radii.normal};
`;