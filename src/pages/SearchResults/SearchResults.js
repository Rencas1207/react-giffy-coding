import React from 'react';
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs';
import { Spinner } from '../../components/Spinner/Spinner';
import { useGifs } from '../../hooks/useGifs';

export const SearchResults = ({ params }) => {
  const { keyword } = params;

  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  // useEffect(() => {
  //   setLoading(true);
  //   getGifs({ keyword }).then((gifs) => {
  //     setGifs(gifs);
  //     setLoading(false);
  //   });
  // }, [keyword]);

  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <br />
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
};
