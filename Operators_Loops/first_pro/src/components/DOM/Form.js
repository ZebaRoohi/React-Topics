import React from 'react'

const Form = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();//avoid reloading the page
        alert('Form submitted succeffully')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input type='text' />
        <label>Password</label>
        <input type='password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
