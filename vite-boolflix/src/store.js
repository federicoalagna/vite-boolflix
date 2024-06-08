
// src/store.js
import { reactive } from 'vue';
import axios from 'axios';

const apiKey = '2c8f6c0253ae3dd944baa8b55c4f808f';

export const store = reactive({
  movies: [],
  tvShows: [],
  loading: false,
  error: null,
  searchMoviesAndTvShows(query) {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it-IT`;
    const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&language=it-IT`;

    this.loading = true;
    this.error = null;
    this.movies = [];
    this.tvShows = [];

    // Effettua entrambe le chiamate API in parallelo
    Promise.all([axios.get(movieUrl), axios.get(tvUrl)])
      .then(([movieResponse, tvResponse]) => {
        this.movies = movieResponse.data.results;
        this.tvShows = tvResponse.data.results;
      })
      .catch(err => {
        this.error = 'Errore durante la ricerca dei film e delle serie TV';
      })
      .finally(() => {
        this.loading = false;
      });
  },
});