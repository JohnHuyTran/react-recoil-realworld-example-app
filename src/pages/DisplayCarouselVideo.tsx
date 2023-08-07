import './VideoCarousel.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      title: 'Video 1',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
      credit: 'Video by cottonbro from Pexels',
    },
    {
      id: 2,
      title: 'Video 2',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      credit: 'Video by cottonbro from Pexels',
    },
    {
      id: 3,
      title: 'Video 3',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      credit: 'Video by cottonbro from Pexels',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
        {/* <h2>Video Slider</h2>
        <p>Easy to use, responsive and customizable.</p>
        <div
          style={{
            padding: '0 20px',
          }}
        ></div> */}
        <Carousel style={{ width: '100%', height: '100%' }}>
          {videoProperties.map(videoObj => {
            return (
              <Carousel.Item key={videoObj.id}>
                <ReactPlayer
                  width={'100%'}
                  height={'100%'}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                  url={videoObj.src}
                  pip={true}
                  controls={true}
                  playing={true}
                  loop={true}
                  progressInterval={100000}
                />
                <Carousel.Caption>
                  <h3>{videoObj.title}</h3>
                  <p>{videoObj.credit}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default VideoCarousel;
