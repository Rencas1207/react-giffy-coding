import React from 'react';

import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs';
import { LazyTrending } from '../../components/TrendingSearches/LazyTrending';
import { useGifs } from '../../hooks/useGifs';

import { Helmet } from 'react-helmet';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giphy</title>
      </Helmet>

      <header className="o-header">
        <SearchForm />
      </header>

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <LazyTrending />
        </div>
      </div>
    </>
  );
};

export default Home;
