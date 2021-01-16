import React from 'react';

import MenuItem from '../menu-item/menu-item.jsx';

import sections from './directory-sections.js';

import './directory.scss';

class Directory extends React.Component {
  constructor () {
    super();

    this.state = {
      sections,
    }
  }

  sectionsList = () => this.state.sections
    .map(({ ...sectionProps }, key) => (
      <MenuItem key={ key } { ...sectionProps } />
    ));

  render () {
    return (
      <section className="directory-menu">
        { this.sectionsList() }
      </section>
    )
  }
}

export default Directory;
