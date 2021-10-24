import React, { useCallback, useEffect, useRef } from 'react';
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs';
import { Spinner } from '../../components/Spinner/Spinner';
import { useGifs } from '../../hooks/useGifs';
import { useNearScreen } from '../../hooks/useNearScreen';

import debounce from 'just-debounce-it';

export const SearchResults = ({ params }) => {
  const { keyword } = params;

  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  //  console.log(show);

  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // const handleNextPage = () => console.log('Next Page');

  // No se va a ejecutar porque la estaríamos creando esta funcion las veces que se crea, entonces para esto podriamos utlizar una ref, pero finalmente usamos un useCallback
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    [setPage] // react-hooks / exhaustive-deps
  );

  useEffect(() => {
    if (show) debounceHandleNextPage();
  }, [show, debounceHandleNextPage]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      {/* <br />
      <button onClick={handleNextPage}>Get next page</button> */}
    </>
  );
};
