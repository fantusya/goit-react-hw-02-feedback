import styled from "styled-components";

export const SectionTitle = styled.h1`
    padding-bottom: ${props => props.theme.space[5]}px;
    text-align: center;

    font-size: ${props => props.theme.fontSizes.xl};
    font-family: ${props => props.theme.fonts.heading};

    color: ${props => props.theme.colors.accent}; 
    text-shadow: 2px 1px 2px rgba(0,0,0,0.6);
`;