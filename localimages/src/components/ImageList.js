import React from 'react';


const ImageList = ({ hi }) => {
  return (
    <div className="image-list">
      {hi.map((image, index) => (
        <img key={index} src={image}  />
      ))}
    </div>
  );
};

export default ImageList;
