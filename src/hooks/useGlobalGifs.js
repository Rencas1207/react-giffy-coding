import { useContext } from 'react';
import { GifsContext } from '../context/GifsContext';

export const useGlobalGifs = () => {
  const { gifs } = useContext(GifsContext);
  return gifs;
};
