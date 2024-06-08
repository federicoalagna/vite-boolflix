
// src/store.js
import { reactive } from 'vue';
import axios from 'axios';

const apiKey = '2c8f6c0253ae3dd944baa8b55c4f808f';


export const store = reactive({
  movies: [],
  tvShows: [],
  loading: false,
  error: null,

  async searchMoviesAndTvShows(query) {
    this.loading = true;
    this.error = null;
    try {
      const [moviesResponse, tvShowsResponse] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it-IT`),
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&language=it-IT`)
      ]);

      this.movies = moviesResponse.data.results;
      this.tvShows = tvShowsResponse.data.results;
    } catch (error) {
      this.error = 'Errore durante la ricerca. Riprova più tardi.';
    } finally {
      this.loading = false;
    }
  }
});