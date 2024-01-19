import React from 'react'
import {PropTypes} from "prop-types";

const DefaultPropTypes = (props) => {
  return (
    <div>
      <h3>Example of Default props</h3>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
    </div>
  )
}

DefaultPropTypes.propTypes={
    name:PropTypes.string,
}
DefaultPropTypes.defaultProps={
    name:'John',
}
export default DefaultPropTypes;
