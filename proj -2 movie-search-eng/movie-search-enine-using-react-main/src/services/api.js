const API_KEY = "791ad8837a7e8dbc2e6cbd4363c9423d";
const BASE_URL = "https://api.themoviedb.org/3";
// const BASE_URL = "https://www.omdbapi.com/?apikey=727bbdc1&s=titanic";
// export const getPopularMovies = async () => {
//   const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//   const data = await response.json();
//   return data.results;
// };

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

// const API_KEY = "727bbdc1";
// const BASE_URL = "https://www.omdbapi.com/";

// export const getPopularMovies = async () => {
//   const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=titanic`);
//   const data = await response.json();
//   return data.Search; // OMDb returns results in `.Search`
// };

// export const searchMovies = async (query) => {
//   const response = await fetch(
//     `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
//   );
//   const data = await response.json();
//   return data.Search;
// };


