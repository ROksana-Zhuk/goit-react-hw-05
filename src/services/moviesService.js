import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org";


const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjNkYTNjNTlmZTNmYjk2NGY2MjFjMmY1ZGRmOTIxMyIsIm5iZiI6MTc0NzA3NTM1NS40OTYsInN1YiI6IjY4MjI0MTFiOGEwZDY2M2U5ZjczOTRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MrNZ0uE98JfNB8xCjuv2g5ht6lUVjo9IuuH6gu_4BJQ'
    }
  };


export const getMoviesTrending = async () => {
    const res = await axios.get(
        "/3/trending/movie/day?language=en-US",
        options
    );
    return res.data.results;
};


export const getMovieDetails = async (movieId) => {
    const res = await axios.get(
        `/3/movie/${movieId}?language=en-US`,
        options
    );
    return res.data;
 };

 export const getMovieCast = async (movieId) => {
    const res = await axios.get(
        `3/movie/${movieId}/credits?language=en-US`,
        options
    );
    return res.data.cast;
 };


 export const getMovieReviews = async (movieId) => {
    const res = await axios.get(
        `3/movie/${movieId}/reviews?language=en-US`,
        options
    );
    return res.data.results;
 };

 export const getMoviesFiltered = async (query) => {
    const res = await axios.get(
        `3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
    );
    return res.data.results;
 };



