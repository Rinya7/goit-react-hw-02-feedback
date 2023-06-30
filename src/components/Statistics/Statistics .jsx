import PropTypes from 'prop-types';
import { BlockFeedbackMarks, Child } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <BlockFeedbackMarks>
        <Child>Good: {good}</Child>
        <Child>Neutral: {neutral}</Child>
        <Child>Bad: {bad}</Child>
      </BlockFeedbackMarks>
      <Child>Total: {total}</Child>
      <Child>Positive feedback: {positivePercentage}%</Child>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
