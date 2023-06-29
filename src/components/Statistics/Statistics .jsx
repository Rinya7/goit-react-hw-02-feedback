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
      {total > 0 ? (
        <>
          <BlockFeedbackMarks>
            <Child>Good: {good}</Child>
            <Child>Neutral: {neutral}</Child>
            <Child>Bad: {bad}</Child>
          </BlockFeedbackMarks>
          <Child>Total: {total ? total : '0'}</Child>
          <Child>
            Positive feedback: {positivePercentage ? positivePercentage : '0'}
          </Child>
        </>
      ) : (
        <Child>There is no feedback</Child>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
