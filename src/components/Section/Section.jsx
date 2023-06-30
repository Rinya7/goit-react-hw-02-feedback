import PropTypes from 'prop-types';
import { Titel } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Titel>{title}</Titel>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
