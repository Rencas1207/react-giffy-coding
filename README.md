# GIFFY APP

## Custom Hook Y Use Context

1. Se creó el custom hook de useGifs

2. Creamos el context de GifsContext

3. Por ultimo creamos el useGlobalGifs para sacar el useContext del Detail.js y usar el custom hook creado.

## Lazy Load, Suspense y paginación con React

1. Creamos el archivo getTrendingTermsService.js en la carpeta services, además el archivo de settings.js y modificamos un poco el getGifs.js. (Trending Search Terms API) [https://developers.giphy.com/docs/api/endpoint#trending-search-terms]

2. Utilizamos intersection Observer API en la función de "LazyTrending" del archivo "TrendingSearches.js".

3. Instalamos el polyfill intersection-observer de npm (Intersection Observer)[https://www.npmjs.com/package/intersection-observer] para que el intersection observer sea compatible con los navegadores antiguos como internet explorer, etc y para hacemos creamos una promise.resolve para importar dinamicamente el Intersection Observer dentro de función de "LazyTrending".

4. Creamos un nuevo hook "useNearScreen.js" e importamos todo la lógica de intersection observer, además separa las dos funciones de "LazyTrending.js" y "TrendingSearches.js"

5. Utilizamos React.lazy en el archivo "LazyTrending.js", pero para eso el archivo que se va importar tiene que estar exportado por default, sino no va a funcionar y nos marcará un error. Luego el archivo que se va a renderizar, que en este caso "TrendingSearches.js" colocamos entre el componente `<Suspense fallback={<Spinner />}></Suspense>`

6. En la paginación vamos al hook "useGifs.js" y creamos un estado (useState), además colocamos el botón en "SearchResults.js". Entonces en "useGifs.js" creamos un efecto (useEffect) y en el "getGifs.js" el offset multiplicamos el page x el límite. Luego creamos también el estado loadingNextPage que al parecer no lo utilizamos.
