import React from 'react'
import BookDetails from './BookDetails'

const Library = () => {
    const books=[
        {
            title:'React',
            author:'John'
        },
        {
            title:'JavaScript',
            author:'Sam'
        },
        {
            title:'NodeJs',
            author:'Harry'
        }
    ]
  return (
    <>
    <h1>Library</h1>
    <div className='book-details'>
       
        {books.map((book,index)=>(
            <BookDetails key={index} title={book.title} author={book.author}  />
        ))}
    </div>
    </>
  )
  }
export default Library
