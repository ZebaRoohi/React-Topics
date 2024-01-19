import React from 'react'

const ImageList = ({img}) => {

  return (
    <div className='image-align'>
      {img.map((image,index)=>(
        <img key={index} src={image} />
      ))}
    </div>
  )
}

export default ImageList
