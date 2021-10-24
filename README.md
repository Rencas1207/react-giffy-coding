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

## CSS Grid, Infinite Scroll y Tests en React

1. Utilizamos en css grid en la hoja de estilos de "ListOfGifs.css" y el grid-template-rows de masonry que sirve para autocompletar los espacios y actualmente solo funciona en Firefox.

2. En la parte de infinite scroll modificamos el archivo "SearchResults.js" utilizando el custom hook de "useNearScreen.js". Luego modificamos tambien el custom hook para obtener el elemento.

3. Instalamos el paquete de (just-debounce)[https://github.com/angus-c/just] es para limitar el número de veces que una vez que llamemos un metodo se puede llamar. Solo llamará una vez que nos servirá el para hacer el infinite scroll. Entonces para ello ejecutamos en nuestro proyecto: `npm install just-debounce-it`

4. Añadimos propiedad de "once" a "useNearScreen.js" y cuando el elemento esta observado entonces si la propiedad "once" es true se desconecta sino pues el setShow(false).

5. Luego en "SearchResults.js" utilizamos el hook de "useCallback" que va permitir que se ejecuta un función dentro de un callback una vez o según la dependencia que le pasemos.

## React.Memo, mejorar el perfomance y deploy en Vercel

1. En nuestro componente "Home.js" separamos el form del buscador de giphy, nombrando el archivo "SearchForm.js". Siempre hay que separa el formulario con lo que vamos a mostrar. Si vamos a Profiler de nuestro navegador, ya con la extension de React DevTools podemos ver que solo se ejecuta en el recuadro el formulario.

2. Ahora si hacemos recarga en la página vemos que en Profiler de DevTools se renderiza o mejor dicho se actualiza el form de que habíamos creado en "SearchForm.js", por lo tanto para que no suceda esto, utilizamos el useCallback en el "Home.js" en la función de "handleSubmit" y colocamos como dependencia "pushLocation". Sin embargo, vemos que "SearchForms.js" se sigue renderizando, entonces utilizamos el hook de useMemo para memorizar el componente. En ese mismo contexto, useMemo no es recomendable para el perfomance de la aplicación, por tanto para ello es recomendable utlilizar React.memo, que en este caso vamos al componente mismo (SearchForm.js) y lo exportamos con React.memo

3. De la misma forma, notamos para el infinite scroll se renderiza los gifs anteriores, entonces en el archivo "Gif.js" usamos React.memo. Ahora supongamos que desde el archivo "ListOfGifs.js", enviamos otro prop (extraInfo) que en Gifs no lo vamos a utilizar, entonces para esto retornamos o comparamos que se memorice siempre y cuando el "id" del "prevProp" con el "nextProp" sean iguales, y ya con esto tendriamos que solo se renderice los nuevo gifs mejorando asi el perfomance.

4. Finalmente, hacemos deploy en Vercel, entonces para ello ejecutamos `npm install vercel -g`, luego que se haya descargado ejecutamos escribimos `vercel` y nos hará unas preguntas para el deploy. Por último, ejecutamos `vercel --prod` para llevarlo a producción
