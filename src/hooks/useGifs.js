import { useContext, useEffect, useState } from 'react';
import { GifsContext } from '../context/GifsContext';
import { getGifs } from '../services/getGifs';

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const { gifs, setGifs } = useContext(GifsContext);
  // const [gifs, setGifs] = useState([]);

  // recuperamos la keyword de localStorage
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // Guardamos la keyword en el localStorage
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, keywordToUse, setGifs]);

  // La página va cambiar solo para el setPage
  return { loading, loadingNextPage, gifs, setPage };
};
