import React from 'react';
import { useLocation } from 'wouter';
import { useForm } from './hookSearchForm';
import './SearchForm.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialRating = 'g', initialKeyword = '' }) => {
  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  // const [path, pushLocation] = useLocation();
  const [, pushLocation] = useLocation();
  // console.log(location); ['/', ƒ];

  const handleChange = (e) => {
    updateKeyword(e.target.value);
    // dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="c-search">
      <button className="c-search-btn">Buscar</button>
      <input
        className="c-search-input"
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
};

export default React.memo(SearchForm);
