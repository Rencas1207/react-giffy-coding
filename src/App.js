import React from 'react'; // { lazy, Suspense }
import './App.css';

import { Route, Link } from 'wouter';

import Home from './pages/Home/Home';
import { Detail } from './pages/Detail/Detail';
import { SearchResults } from './pages/SearchResults/SearchResults';

import { StaticContext } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

// const HomePage = lazy(() => import('./pages/Home/Home'));

export const App = () => {
  return (
    <StaticContext.Provider
      value={{ name: 'midudev', suscribeteAlCanal: true }}
    >
      <div className="App">
        {/* <Suspense fallback={null}> */}
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img src="/logo.png" alt="Giffy logo" className="App-logo" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            {/* <Route path="/" component={HomePage} /> */}
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
        {/* </Suspense> */}
      </div>
    </StaticContext.Provider>
  );
};
