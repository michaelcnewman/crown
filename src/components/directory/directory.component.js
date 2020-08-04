import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: DIRECTORY_DATA,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map((section) => (
          <MenuItem key={section.id} {...section} />
        ))}
      </div>
    );
  }
}

export default Directory;
