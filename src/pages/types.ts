import { MouseEvent, CSSProperties, ReactNode, ComponentType } from 'react';

type Key = string | number;

export interface VideoTag {
  value: ReactNode;
  title: string;
  key?: Key;
}

export interface Video {
  key?: Key;
  src: string;
  width: number;
  height: number;
  nano?: string;
  alt?: string;
  tags?: VideoTag[];
  isSelected?: boolean;
  caption?: ReactNode;
  customOverlay?: ReactNode;
  thumbnailCaption?: ReactNode;
  orientation?: number | undefined;
}

export interface Video {
  key?: Key;
  src: string;
  width: number;
  height: number;
  nano?: string;
  alt?: string;
  tags?: VideoTag[];
  isSelected?: boolean;
  caption?: ReactNode;
  customOverlay?: ReactNode;
  thumbnailCaption?: ReactNode;
  orientation?: number | undefined;
  title?: string;
  credit?: string;
}

export type VideoExtended<T extends Video = Video> = T & {
  scaledWidth: number;
  scaledHeight: number;
  viewportWidth: number;
  marginLeft: number;
};

export interface BuildLayoutOptions {
  containerWidth: number;
  maxRows?: number;
  rowHeight?: number;
  margin?: number;
}

export type VideoExtendedRow<T extends Video = Video> = VideoExtended<T>[];

export type EventHandler<T extends Video = Video> = (
  index: number,
  item: T,
  event: MouseEvent<HTMLElement>,
) => void;

export type StyleFunctionContext<T extends Video = Video> = {
  item: T;
};

export type StyleFunction<T extends Video = Video> = (
  context: StyleFunctionContext,
) => CSSProperties;

export type StyleProp<T extends Video = Video> =
  | CSSProperties
  | StyleFunction<T>;

export interface VideoProps<T extends VideoExtended = VideoExtended> {
  item: T;
  index: number;
  margin: number;
  isSelectable: boolean;
  onClick: (index: number, event: MouseEvent<HTMLElement>) => void;
  onSelect: (index: number, event: MouseEvent<HTMLElement>) => void;
  tileViewportStyle: StyleProp<T>;
  thumbnailStyle: StyleProp<T>;
  tagStyle: StyleProp<T>;
  height?: number;
  thumbnailVideoComponent?: ComponentType<ThumbnailVideoProps>;
}

export interface ThumbnailVideoComponentVideoProps {
  key: string | number;
  src: string;
  alt: string;
  title: string | null;
  style: CSSProperties;
}

export type ThumbnailVideoProps<T extends VideoExtended = VideoExtended> =
  VideoProps<T> & {
    videoProps: ThumbnailVideoComponentVideoProps;
  };

export interface GalleryCustomProps<T extends Video = Video> {
  videos: T[];
  id?: string;
  enableVideoSelection?: boolean;
  onSelect?: EventHandler<T>;
  rowHeight?: number;
  maxRows?: number;
  margin?: number;
  defaultContainerWidth?: number;
  onClick?: EventHandler<T>;
  tileViewportStyle?: StyleProp<T>;
  thumbnailStyle?: StyleProp<T>;
  tagStyle?: StyleProp<T>;
  thumbnailVideoComponent?: ComponentType<ThumbnailVideoProps>;
}

export interface CheckButtonProps {
  isSelected: boolean;
  isVisible: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  color?: string;
  selectedColor?: string;
  hoverColor?: string;
}
