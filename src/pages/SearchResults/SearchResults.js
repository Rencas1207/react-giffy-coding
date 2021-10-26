import React, { useCallback, useEffect, useRef } from 'react';
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs';
import { Spinner } from '../../components/Spinner/Spinner';
import { useGifs } from '../../hooks/useGifs';
import { useNearScreen } from '../../hooks/useNearScreen';
// import { useSEO } from '../../hooks/useSEO';

import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
import SearchForm from '../../components/SearchForm/SearchForm';

export const SearchResults = ({ params }) => {
  const { keyword, rating = 'g' } = params;

  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';
  // useSEO({ title });

  // console.log(show);

  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // const handleNextPage = () => console.log('Next Page');

  // No se va a ejecutar porque la estaríamos creando esta funcion las veces que se crea, entonces para esto podriamos utlizar una ref, pero finalmente usamos un useCallback
  const debounceHandleNextPage = useCallback(
    () =>
      // debounce(() => setPage((prevPage) => prevPage + 1), 500),
      debounce(
        setPage((prevPage) => prevPage + 1),
        500
      ),
    [setPage]
  );

  useEffect(() => {
    if (show) debounceHandleNextPage();
  }, [show, debounceHandleNextPage]);

  return (
    <>
      {loading ? (
        <>
          <Spinner />
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
        </>
      ) : (
        <>
          <Helmet>
            <title>{decodeURI(title)}</title>
            <meta name="description" content={title} />
            <meta name="rating" content="General" />
          </Helmet>

          <header className="o-header">
            <SearchForm initialKeyword={keyword} initialRating={rating} />
          </header>

          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
};
