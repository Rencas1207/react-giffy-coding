const apiKey = 'GTFnjH2UIg90s4E9YH6SWF3dg7GNF0kz';

export const getGifs = ({ keyword = 'morty' } = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((resp) => resp.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((gif) => {
          const { title, images, id } = gif;
          const url = images.downsized_medium.url;
          return { title, id, url };
        });
        // console.log(gifs);
        return gifs;
      }
    });
};

// const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa';

// const fromApiResponseToGifs = (apiResponse) => {
//   const { data = [] } = apiResponse;
//   if (Array.isArray(data)) {
//     const gifs = data.map((image) => {
//       const { images, title, id } = image;
//       const { url } = images.downsized_medium;
//       return { title, id, url };
//     });
//     return gifs;
//   }
//   return [];
// };

// export const getGifs = ({ limit = 25, keyword = 'morty' } = {}) => {
//   const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=G&lang=en`;

//   return fetch(apiURL)
//     .then((res) => res.json())
//     .then(fromApiResponseToGifs);
// };
