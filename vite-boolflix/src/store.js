
// src/store.js
import { reactive } from 'vue';
import axios from 'axios';

const apiKey = '2c8f6c0253ae3dd944baa8b55c4f808f';

export const store = reactive({
  movies: [],

  async searchMovies(query) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it-IT`;


      axios.get(url)
      .then(response => {
        this.movies = response.data.results;
      })
      .catch(err => {
        this.error = 'Errore durante la ricerca dei film';
      })
      .finally(() => {
        this.loading = false;
      });
  },
});
