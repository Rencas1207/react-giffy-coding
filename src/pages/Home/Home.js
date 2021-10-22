import React, { useState } from 'react';
import { Link } from 'wouter';
import useLocation from 'wouter/use-location';
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

const POPULAR_GIFS = ['Matrix', 'Perú', 'Chile', 'Colombia', 'Ecuador'];

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
        <input
          placeholder="Search a gif here"
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button type="submit">Buscar</button>
      </form>

      <h3 className="App-title">Última búsqueda</h3>

      <ListOfGifs gifs={gifs} />

      <h3 className="App-title">Los gifs más populares</h3>

      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
