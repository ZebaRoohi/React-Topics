import React from 'react'

const Proptypes = (props) => {
  return (
    <div>
        <h3>Example of Proptype</h3>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Email:{props.email}</p>
    </div>
  )
}
Proptypes.propTypes={
    name:Proptypes.string,
    age:Proptypes.number,
    email:Proptypes.string,

}
export default Proptypes
