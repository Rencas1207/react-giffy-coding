import React from 'react';
import { Gif } from '../../components/Gif/Gif';
import { useGlobalGifs } from '../../hooks/useGlobalGifs';

export const Detail = ({ params }) => {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  console.log(gif);

  // console.log(params.id);
  return <Gif {...gif} />;
};