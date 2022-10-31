import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonsFeedbackTitle,
  ButtonsFeedbackList,
  ButtonFeedback,
} from './FeedbackOptions.styled';
import { Box } from 'components/Box';

class FeedbackOptions extends Component {
  countQuantity = el => {
    this.props.onLeaveFeedback(el);
  };

  render() {
    return (
      <Box
        pb={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <ButtonsFeedbackTitle>Please leave feedback</ButtonsFeedbackTitle>
        <ButtonsFeedbackList>
          {this.props.options.map(el => (
            <li key={el}>
              <ButtonFeedback
                type="button"
                onClick={() => this.countQuantity(el)}
              >
                {el}
              </ButtonFeedback>
            </li>
          ))}
        </ButtonsFeedbackList>
      </Box>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
