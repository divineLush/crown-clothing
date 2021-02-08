import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector.js';

import MenuItem from '../menu-item/menu-item.jsx';

import './directory.scss';

const Directory = ({ sections }) => {
  const sectionsList = sections
    .map(({ ...sectionProps }, key) => (
      <MenuItem key={ key } { ...sectionProps } />
    ));

  return (
    <section className="directory-menu">
      { sectionsList }
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
