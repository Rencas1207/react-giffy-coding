import React, { Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Spinner } from '../Spinner/Spinner';

// De nuestro TrendinSearches queremos cargar de forma lazy, es decir solo cuando lo vamos a necesitar el Trending Searches
const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

// Cargar lazy la sección de Trending
export const LazyTrending = () => {
  const { show, element } = useNearScreen({ distance: '200px' });

  return (
    <div ref={element}>
      <Suspense fallback={<Spinner />}>
        {show ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  );
};
