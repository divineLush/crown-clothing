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
    .map(({ title, imageUrl, size }, key) => (
      <MenuItem
        key={ key }
        title={ title }
        imageUrl={ imageUrl }
        size={ size }
      />
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
