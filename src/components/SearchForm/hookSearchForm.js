// PROGRAMACIÓN FUNCIONAL
// const ACTIONS_REDUCERS = {
//   [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
//     ...state,
//     keyword: action.payload,
//     times: state.times + 1,
//   }),
//   [ACTIONS.UPDATE_RATING]: (state, action) => ({
//     ...state,
//     rating: action.payload,
//   }),
// };

// const reducer = (state, action) => {
//   const actionReducer = ACTIONS_REDUCERS[action.type];
//   return actionReducer ? actionReducer(state, action) : state;
// };

import { useReducer } from 'react';

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export const useForm = ({ initialRating = 'g', initialKeyword = '' } = {}) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, times, rating } = state;

  return {
    keyword,
    times,
    rating,
    updateKeyword: (keyword) =>
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: (rating) =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
  };
};
