import React, { useState } from 'react';
import { GalleryCustom } from './GalleryCustom';
import Lightbox from 'react-image-lightbox';

function HorizontalMultiFrame() {
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
    {
      key: 5,
      title: 'Video 5',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
    {
      key: 6,
      title: 'Video 6',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
    {
      key: 7,
      title: 'Video 7',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
    {
      key: 8,
      title: 'Video 8',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      width: 320,
      height: 200,
      credit: 'Video by cottonbro from Pexels',
    },
    {
      key: 9,
      title: 'Video 9',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
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
          <GalleryCustom videos={videos} />
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

export default HorizontalMultiFrame;
