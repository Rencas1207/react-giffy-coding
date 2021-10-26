import React, { Suspense } from 'react'; // { lazy, Suspense }
import './App.css';

import { Route, Link } from 'wouter';

// import Home from './pages/Home/Home';
import { Detail } from './pages/Detail/Detail';
import { SearchResults } from './pages/SearchResults/SearchResults';

import { StaticContext } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/Home/Home'));

export const App = () => {
  return (
    <StaticContext.Provider
      value={{ name: 'midudev', suscribeteAlCanal: true }}
    >
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img src="/logo.png" alt="Giffy logo" className="App-logo" />
              </figure>
            </Link>
            <GifsContextProvider>
              {/* <Route path="/" component={Home} /> */}
              <Route path="/" component={HomePage} />
              <Route
                // Si le colocamos ? decimso que este segmento dinamico sea opcional
                path="/search/:keyword/:rating?"
                component={SearchResults}
              />
              <Route path="/gif/:id" component={Detail} />

              {/* AQUÍ IMPLETAMOS LA RUTA O PAGINA PARA EL 404 */}
              <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
};
