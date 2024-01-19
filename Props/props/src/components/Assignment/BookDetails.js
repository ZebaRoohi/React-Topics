import React from 'react'

const BookDetails = ({title,author}) => {
  return (
    <div className='book-align'>
      <h3>Book Details....</h3>
      <h4>{title}</h4>
      <p>Author:{author}</p>
    </div>
  )
}

export default BookDetails
