import React, { useCallback } from 'react';
import useLocation from 'wouter/use-location';

import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs';
import SearchForm from '../../components/SearchForm/SearchForm';
import { LazyTrending } from '../../components/TrendingSearches/LazyTrending';
import { useGifs } from '../../hooks/useGifs';

import { Helmet } from 'react-helmet';

const Home = () => {
  // const [keyword, setKeyword] = useState('');
  // const [path, pushLocation] = useLocation();
  const [, pushLocation] = useLocation();
  // console.log(location); ['/', ƒ];

  // const { loading, gifs } = useGifs();
  const { gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  // const element = useMemo(
  //   () => <SearchForm onSubmit={handleSubmit} />,
  //   [handleSubmit]
  // );

  return (
    <>
      <Helmet>
        <title>Home | Giphy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      {/* {element} */}
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          {/* <Category name="Categorías populares" options={POPULAR_GIFS} /> */}
          {/* <Category name="Mascotas" options={['Perros', 'Gatos', 'Hamster']} /> */}
          <LazyTrending />
        </div>
      </div>
    </>
  );
};

export default Home;
