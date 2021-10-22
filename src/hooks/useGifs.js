import { useContext, useEffect, useState } from 'react';
import { GifsContext } from '../context/GifsContext';
import { getGifs } from '../services/getGifs';

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  // const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    // recuperamos la keyword de localStorage
    const keywordToUse =
      keyword || localStorage.getItem('lastKeyword') || 'random';

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // Guardamos la keyword en el localStorage
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
};
