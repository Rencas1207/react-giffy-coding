import { useEffect, useState } from 'react';
import { getTrendingTermsService } from '../../services/getTrendingTermsService';
import { Category } from '../Category/Category';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);
  return <Category options={trends} name="Tendencias" />;
};

export default TrendingSearches;
