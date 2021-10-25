import { useEffect, useState } from 'react';
import { getSingleGifs } from '../services/getSingleGif';
import { useGifs } from './useGifs';

export const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gitFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gitFromCache);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Si no obtenemos el gif entonces va a llamar de manera asincron
  useEffect(() => {
    if (!gif) {
      // llamar al servicio sino tenemos gif - {id} -> parámetro nombrado
      setIsLoading(true);

      // getSingleGifs({ id }).then(setGif);
      getSingleGifs({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  // Devolvemos los dos estados (isLoading, isError)
  return { gif, isLoading, isError };
};
