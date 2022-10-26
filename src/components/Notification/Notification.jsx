import React from 'react';
import PropTypes from 'prop-types';
import { NotificationText, NotificationTitle } from './Notification.styled';
import { Box } from 'components/Box';

const Notification = ({ message }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
          <NotificationTitle>Statistics</NotificationTitle>
          <NotificationText>{message}</NotificationText>
        </Box>
    )
};
   
export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}