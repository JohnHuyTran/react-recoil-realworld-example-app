import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { useStyles } from './styles'
import { Card } from '@mui/material';
import CardMedia from '@mui/material';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const checkVideo = (item : string) =>{
  let check = item.split('.').reverse(); 
  if(check[0] !== 'mp4') return false;
  return true;
}

// const classes = useStyles();

export default function CustomImageList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Card>
    <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={300}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <>
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            {
              !checkVideo(item.img) ? (
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  loading="lazy"
                />
              ) : (
                <Card sx={{ maxWidth: 250 }}>
                  <source src={item.img} type="video/mp4"/>
                    {/* <CardMedia
                      component="video"
                      height="200"
                      src={item.img}
                      autoPlay
                    /> */}
                </Card>
              )
            }
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                >
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
          </>
        );
      })}
    </ImageList>
    </Card>
    </div>
  );
}

const itemData = [
  {
    img: 'https://media.giphy.com/media/qQuhbOoYdCjyAbOgO7/giphy.gif',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://media.giphy.com/media/pZ4Id8atXOUgxpktmO/giphy.gif',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://media.giphy.com/media/egjZYT0qbaAJqWyW4R/giphy.gif',
    author: '@helloimnik',
  },
  {
    img: 'https://media.giphy.com/media/xTiN0irKwJTF4QjSWQ/giphy.gif',
    author: '@nolanissac',
  },
  {
    img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel',
    author: '@hjrc33',
  },
  {
    img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    author: '@tjdragotta',
  },
  {
    img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    author: '@katie_wasserman',
  },
  {
    img: '"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    author: '@silverdalex',
  },
  {
    img: '"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    author: '@shelleypauls',
  },
  {
    img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    author: '@peterlaster',
  },
  {
    img: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    author: '@southside_customs',
  },
];
