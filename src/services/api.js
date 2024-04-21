import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  language: "en-US",
};
axios.defaults.headers.common.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjRkN2IwNzg5OTQwOGM1MTBlM2RmYzgwYTU2ZjUwOSIsInN1YiI6IjY2MjA0NzEzZWNhZWY1MDE2M2Y5Yjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zePi9NJQsYyKYadY4o_bn0PQ2z4Myq9X5-gv6YSxrWI";

export const getTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const getMovieCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};
export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      adult: false,
      query,
    },
  });

  return data.results;
};