import React from 'react';
import { connect } from 'react-redux';

import { DirectoryMenuContainer } from './directory.styles';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySection } from '../../redux/directory/directory.selectors.js';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
