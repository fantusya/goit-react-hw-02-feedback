import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsTitle, StatisticsList, StatisticsItem, StatisticsValue } from './Statistics.styled';
import { Box } from 'components/Box';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsList>
          <StatisticsItem>Good
            <HiOutlineArrowNarrowDown />
            <StatisticsValue>{good}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>Neutral
            <HiOutlineArrowNarrowDown />
            <StatisticsValue>{neutral}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>Bad
            <HiOutlineArrowNarrowDown />
            <StatisticsValue>{bad}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>Total
            <HiOutlineArrowNarrowDown />
            <StatisticsValue>{total}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>Positive feedback
            <HiOutlineArrowNarrowDown />
            <StatisticsValue>{Number.isNaN(positivePercentage) ? 0 : positivePercentage}%</StatisticsValue>
          </StatisticsItem>
        </StatisticsList>
      </Box>
    )
};
   
export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}