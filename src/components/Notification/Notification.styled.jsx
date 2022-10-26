import styled from "styled-components";

export const NotificationTitle = styled.h2`
    margin-bottom: ${props => props.theme.space[4]}px;

    font-size: ${props => props.theme.fontSizes.l};
    letter-spacing: 0.03em;
    
    color: ${props => props.theme.colors.text};
    text-shadow: 1px 1px 1px rgba(0,0,0,0.6);
`;

export const NotificationText = styled.p`
    font-family: ${props => props.theme.fonts.monospace};
    font-size: ${props => props.theme.fontSizes.lm};
    letter-spacing: 0.03em;

    color: ${props => props.theme.colors.red};
`;