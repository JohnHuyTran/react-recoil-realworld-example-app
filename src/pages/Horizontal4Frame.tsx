import React, { useState } from 'react';
import { GalleryCustom4Frame } from './GalleryCustom4Frame';
import Lightbox from 'react-image-lightbox';

function Horizontal4Frame() {
  const [index, setIndex] = useState(-1);

  // const handleClick = (index: number, item: Custom)
  const videos = [
    {
      key: 1,
      title: 'Video 1',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
    {
      key: 2,
      title: 'Video 2',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
    {
      key: 3,
      title: 'Video 3',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
    {
      key: 4,
      title: 'Video 4',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2>Custom Slider</h2>
        <p>Easy to use, responsive and customizable.</p>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <GalleryCustom4Frame videos={videos} />
          {/* <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}

            
            close={() => setIndex(-1)}
        /> */}
        </div>
      </div>
    </div>
  );
}

export default Horizontal4Frame;
