import styled from "styled-components";

export const ButtonsFeedbackTitle = styled.h2`
    margin-bottom: ${props => props.theme.space[5]}px;

    font-size: ${props => props.theme.fontSizes.l};
    letter-spacing: 0.03em;

    color: ${props => props.theme.colors.text};
    text-shadow: 1px 1px 1px rgba(0,0,0,0.6);
`;

export const ButtonsFeedbackList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    gap: ${props => props.theme.space[6]}px;
`;

export const ButtonFeedback = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: ${props => props.theme.space[4]}px;
    min-width: 100px;
    
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-family: ${props => props.theme.fonts.monospace};
    letter-spacing: 0.1em;
    
    background-color: ${props => props.theme.colors.golden};
    color: ${props => props.theme.colors.text};
    outline: none;
    border: ${props => props.theme.borders.normal} transparent;
    border-radius: ${props => props.theme.radii.normal};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.text};
        border-color: ${props => props.theme.colors.golden};
    }
`;