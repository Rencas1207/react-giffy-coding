import React from 'react';
import Gif from '../Gif/Gif';
import './ListOfGifs.css';

export const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url, ...extraOfGifs }) => (
        <Gif id={id} key={id} title={title} url={url} extraInfo={extraOfGifs} />
      ))}
    </div>
  );
};
