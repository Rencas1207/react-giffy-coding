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

  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
};
