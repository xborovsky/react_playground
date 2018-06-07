import React from 'react';
import FilterLink from './FilterLink';
import constants from '../redux/constants';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={constants.VISIBILITY_FILTERS.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={constants.VISIBILITY_FILTERS.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={constants.VISIBILITY_FILTERS.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
);

export default Footer;