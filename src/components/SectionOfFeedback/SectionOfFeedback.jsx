import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitle } from './SectionOfFeedback.styled';
import { Box } from 'components/Box';

const SectionOfFeedback = ({ title, children }) => {
    return (
        <section>
            <Box px={6}>
                <SectionTitle>{title}</SectionTitle>
                {children}
            </Box>
        </section>
    )
};
   
export default SectionOfFeedback;

SectionOfFeedback.propTypes = {
    title: PropTypes.string.isRequired,
}