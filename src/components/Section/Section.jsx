import PropTypes from 'prop-types';
import { Titel } from './Section.styled';
//import { Children } from 'react';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Titel>{title}</Titel>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
