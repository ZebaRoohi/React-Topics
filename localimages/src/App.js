import React from 'react';
import './App.css';
import ImageList from './components/ImageList';
import ConditionalComponentRendering from './components/ComponentRender';
import Fetch from './components/Fetch';

function App() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  return (
    <div className="App">
      <h1>Local Image Gallery</h1>
      <ImageList hi={images} />
      <ConditionalComponentRendering />
      <Fetch />
    </div>
  );
}

export default App;
