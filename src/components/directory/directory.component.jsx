import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { selectDirectorySection } from "../../redux/directory/directory.selectors.js";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
