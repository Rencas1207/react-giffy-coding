import React, { useState } from 'react';
import useLocation from 'wouter/use-location';

import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs';
import { LazyTrending } from '../../components/TrendingSearches/LazyTrending';
import { useGifs } from '../../hooks/useGifs';

export const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  // console.log(location); ['/', ƒ];

  const { loading, gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Buscar</button>
        <input
          placeholder="Search a gif here"
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>

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
