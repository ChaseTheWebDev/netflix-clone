import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const apiService = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await apiService.get(`/discover/movie`, {
      params: {
        with_genres: genreId,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    throw error;
  }
};

export const searchMoviesByTitle = async (title) => {
  try {
    const response = await apiService.get(`/search/movie`, {
      params: {
        query: title,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies by title:', error);
    throw error;
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    const response = await apiService.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
