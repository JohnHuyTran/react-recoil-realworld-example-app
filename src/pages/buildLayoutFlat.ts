// import {
//   VideoExtended,
//   Video,
//   BuildLayoutOptions,
//   VideoExtendedRow,
// } from './types';
// const calculateCutOff = <T extends VideoExtended = VideoExtended>(
//   items: T[],
//   totalRowWidth: number,
//   protrudingWidth: number,
// ) => {
//   const cutOff: number[] = [];
//   let cutSum = 0;
//   for (let i in items) {
//     const item = items[i];
//     const fractionOfWidth = item.scaledWidth / totalRowWidth;
//     cutOff[i] = Math.floor(fractionOfWidth * protrudingWidth);
//     cutSum += cutOff[i];
//   }
//   let stillToCutOff = protrudingWidth - cutSum;
//   while (stillToCutOff > 0) {
//     for (let i in cutOff) {
//       cutOff[i]++;
//       stillToCutOff--;
//       if (stillToCutOff < 0) break;
//     }
//   }
//   return cutOff;
// };
// const getRow = <T extends Video = Video>(
//   videos: T[],
//   { containerWidth, rowHeight, margin }: BuildLayoutOptions,
// ): [VideoExtendedRow<T>, T[]] => {
//   const row: VideoExtendedRow<T> = [];
//   const imgMargin = margin ? (2 * margin) : null;
//   const items = [...videos];
//   let totalRowWidth = 0;
//   while (items.length > 0 && totalRowWidth < containerWidth) {
//     const item = items.shift();
//     const scaledWidth = item ? (Math.floor(rowHeight * (item.width / item.height))) : null;
//     const extendedItem: VideoExtended<T> = {
//       ...item,
//       scaledHeight: rowHeight,
//       scaledWidth,
//       viewportWidth: scaledWidth,
//       marginLeft: 0,
//     };
//     row.push(extendedItem);
//     totalRowWidth += extendedItem.scaledWidth + imgMargin;
//   }
//   const protrudingWidth = totalRowWidth - containerWidth;
//   if (row.length > 0 && protrudingWidth > 0) {
//     const cutoff = calculateCutOff(row, totalRowWidth, protrudingWidth);
//     for (const i in row) {
//       const pixelsToRemove = cutoff[i];
//       const item = row[i];
//       item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
//       item.viewportWidth = item.scaledWidth - pixelsToRemove;
//     }
//   }
//   return [row, items];
// };
// const getRows = <T extends Video = Video>(
//   videos: T[],
//   options: BuildLayoutOptions,
//   rows: VideoExtendedRow<T>[] = [],
// ): VideoExtendedRow<T>[] => {
//   const [row, videosLeft] = getRow(videos, options);
//   const nextRows = [...rows, row];
//   if (options.maxRows && nextRows.length >= options.maxRows) {
//     return nextRows;
//   }
//   if (videosLeft.length) {
//     return getRows(videosLeft, options, nextRows);
//   }
//   return nextRows;
// };
// export const buildLayout = <T extends Video = Video>(
//   videos: T[],
//   { containerWidth, maxRows, rowHeight, margin }: BuildLayoutOptions,
// ): VideoExtendedRow<T>[] => {
//   rowHeight = typeof rowHeight === 'undefined' ? 180 : rowHeight;
//   margin = typeof margin === 'undefined' ? 2 : margin;
//   if (!videos) return [];
//   if (!containerWidth) return [];
//   const options = { containerWidth, maxRows, rowHeight, margin };
//   return getRows(videos, options);
// };
// export const buildLayoutFlat = <T extends Video = Video>(
//   videos: T[],
//   options: BuildLayoutOptions,
// ): VideoExtendedRow<T> => {
//   const rows = buildLayout(videos, options);
//   return [].concat.apply([], rows);

import { buildLayoutFlat } from 'react-grid-gallery';

// };
export default buildLayoutFlat;
