import { useState, MouseEvent } from 'react';
// import { CheckButton } from "./CheckButton";
import { VideoExtended, VideoProps } from './types';
import * as styles from './stylesCustom';
import { getStyle } from './stylesCustom';
import './VideoCarousel.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Carousel as CarouselM } from 'react-carousel-minimal';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';

export const Video = <T extends VideoExtended>({
  item,

  thumbnailVideoComponent: ThumbnailVideoComponent,
  isSelectable = true,
  thumbnailStyle,
  tagStyle,
  tileViewportStyle,
  margin,
  index,
  onSelect,
  onClick,
}: VideoProps<T>): JSX.Element => {
  const styleContext = { item };

  const [hover, setHover] = useState(false);

  // const thumbnailProps = {
  //   key: index,
  //   "data-testid": "grid-gallery-item_thumbnail",
  //   src: item.src,
  //   alt: item.alt ? item.alt : "",
  //   title: typeof item.caption === "string" ? item.caption : null,
  //   style: getStyle(thumbnailStyle, styles.thumbnail, styleContext),
  // };

  const handleCheckButtonClick = (event: MouseEvent<HTMLElement>) => {
    if (!isSelectable) {
      return;
    }
    onSelect(index, event);
  };

  const handleViewportClick = (event: MouseEvent<HTMLElement>) => {
    onClick(index, event);
  };

  const videoProperties = [
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
  ];

  const data = [
    {
      image: 'https://media.giphy.com/media/26NbZAJ9IQIJG/giphy.gif',
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg',
      caption: 'Darjeeling',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const checkVideo = (item: string) => {
    let check = item.split('.').reverse();
    if (check[0] !== 'mp4') return false;
    return true;
  };

  const thumbnailVideoProps = {
    item,
    index,
    margin,
    onSelect,
    onClick,
    isSelectable,
    tileViewportStyle,
    thumbnailStyle,
    tagStyle,
  };

  return (
    <div
      className="ReactGridGallery_tile"
      data-testid="grid-gallery-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={styles.galleryCustomItem({ margin })}
    >
      <div
        className="ReactGridGallery_tile-icon-bar"
        style={styles.tileIconBar}
      >
        {/* <CheckButton
          isSelected={item.isSelected}
          isVisible={item.isSelected || (isSelectable && hover)}
          onClick={handleCheckButtonClick}
        /> */}
      </div>

      {!!item.tags && (
        <div
          className="ReactGridGallery_tile-bottom-bar"
          style={styles.bottomBar}
        >
          {item.tags.map((tag, index) => (
            <div
              key={tag.key || index}
              title={tag.title}
              style={styles.tagItemBlock}
            >
              {/* <span style={getStyle(tagStyle, styles.tagItem, styleContext)}>
                {tag.value}
              </span> */}
            </div>
          ))}
        </div>
      )}

      {!!item.customOverlay && (
        <div
          className="ReactGridGallery_custom-overlay"
          style={styles.customOverlay({ hover })}
        >
          {item.customOverlay}
        </div>
      )}

      <div
        className="ReactGridGallery_tile-overlay"
        style={styles.tileOverlay({
          showOverlay: hover && !item.isSelected && isSelectable,
        })}
      />

      <div
        className="ReactGridGallery_tile-viewport"
        data-testid="grid-gallery-item_viewport"
        // style={getStyle(tileViewportStyle, styles.tileViewport, styleContext)}
        onClick={handleViewportClick}
      >
        {/* {ThumbnailVideoComponent ? (
          <ThumbnailVideoComponent
            {...thumbnailVideoProps}
            videoProps={thumbnailProps}
          />
        ) : ( */}
        {/* <img {...thumbnailProps} /> */}
        {/* )} */}
        <Carousel>
          {videoProperties.map(videoObj =>
            checkVideo(videoObj.src) ? (
              <Carousel.Item
                key={videoObj.key}
                style={{
                  width: `${videoObj.width}`,
                  height: `${videoObj.height}`,
                }}
              >
                <ReactPlayer
                  url={videoObj.src}
                  pip={true}
                  controls={true}
                  playing={true}
                  loop={true}
                  playsinline={true}
                  progressInterval={100000}
                />
                <Carousel.Caption>
                  <h3>{videoObj.title}</h3>
                  <p>{videoObj.credit}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ) : (
              <CarouselM
                data={data}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: 'center',
                  maxWidth: '850px',
                  maxHeight: '500px',
                  margin: '40px auto',
                }}
              />
            ),
          )}
        </Carousel>
      </div>
      {item.thumbnailCaption && (
        <div
          className="ReactGridGallery_tile-description"
          style={styles.tileDescription}
        >
          {item.thumbnailCaption}
        </div>
      )}
    </div>
  );
};
