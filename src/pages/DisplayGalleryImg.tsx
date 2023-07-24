import React from 'react'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "./images";

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

function DisplayGalleryImg() {
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;
  
    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);
  
    return (
      <div style={{}}>
        <div style={{textAlign: 'center'}}>
          <h2>Custom Image gallery</h2>
          <p>Easy to use, responsive and customizable</p>
          <div style={{padding: "0 20px"}}>
              <Gallery
                images={images}
                onClick={handleClick}
                enableImageSelection={false}
              />
              {!!currentImage && (
                /* @ts-ignore */
                <Lightbox
                  mainSrc={currentImage.original}
                  imageTitle={currentImage.caption}
                  mainSrcThumbnail={currentImage.src}
                  nextSrc={nextImage.original}
                  nextSrcThumbnail={nextImage.src}
                  prevSrc={prevImage.original}
                  prevSrcThumbnail={prevImage.src}
                  onCloseRequest={handleClose}
                  onMovePrevRequest={handleMovePrev}
                  onMoveNextRequest={handleMoveNext}
                />
              )}
          </div>
        </div>
      </div>
    );
}

export default DisplayGalleryImg