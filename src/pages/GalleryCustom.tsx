import { useState, useEffect, useCallback, useRef, MouseEvent } from 'react';
import { Video } from './Video';
// import { ResizeListener } from "./ResizeListener";
import { Video as VideoInterface, GalleryCustomProps } from './types';
import * as styles from './stylesCustom';

export const GalleryCustom = <T extends VideoInterface>({
  videos,
  id = 'ReactGridGalleryCustom',
  onSelect = () => {},
  rowHeight = 180,
  maxRows,
  margin = 2,
  defaultContainerWidth = 0,
  onClick = () => {},
  tileViewportStyle,
  thumbnailStyle,
  tagStyle,
}: GalleryCustomProps<T>): JSX.Element => {
  const galleryCustomRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(defaultContainerWidth);

  const handleResize = useCallback(() => {
    if (!galleryCustomRef.current) {
      return;
    }
    let width = galleryCustomRef.current.clientWidth;
    try {
      width = galleryCustomRef.current.getBoundingClientRect().width;
    } catch (err) {}
    setContainerWidth(Math.floor(width));
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  // const thumbnails = buildLayoutFlat<T>(videos, {
  //   containerWidth,
  //   maxRows,
  //   rowHeight,
  //   margin,
  // });

  const handleSelect = (index: number, event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onSelect(index, videos[index], event);
  };

  const handleClick = (index: number, event: MouseEvent<HTMLElement>) => {
    onClick(index, videos[index], event);
  };

  const titleView = () => {};
  const thumbnailFunction = () => {};
  const tagStyleFunction = () => {};

  return (
    <div id={id} className="ReactGridGalleryCustom" ref={galleryCustomRef}>
      {/* <ResizeListener onResize={handleResize} /> */}
      <div style={styles.galleryCustom}>
        {videos.map((item: any, index: any) => (
          <Video
            key={item.key || index}
            item={item}
            index={index}
            margin={margin}
            height={rowHeight}
            onClick={handleClick}
            onSelect={handleSelect}
            isSelectable={false}
            tileViewportStyle={{ alignContent: 'center' }}
            thumbnailStyle={{ alignItems: 'center' }}
            tagStyle={{ alignSelf: 'center' }}
          />
        ))}
      </div>
    </div>
  );
};

GalleryCustom.displayName = 'GalleryCustom';
