<script>
import { ref } from 'vue';
import { store } from '../store';

export default {
  setup() {
    const query = ref('');

    const search = () => {
      if (query.value.trim()) {
        store.searchMoviesAndTvShows(query.value);
      }
    };

    const getMovieImageUrl = (path) => {
      return path ? `https://image.tmdb.org/t/p/w342${path}` : 'path/to/default/image.jpg';
    };

    const getTvShowImageUrl = (path) => {
      return path ? `https://image.tmdb.org/t/p/w342${path}` : 'path/to/default/image.jpg';
    };

    return {
      query,
      store,
      search,
      getMovieImageUrl,
      getTvShowImageUrl,
    };
  },
};
</script>




<template>
  <header>
<div> <img src="https://edu-boolflix.netlify.app/assets/img/logo.png" alt="Titolo" /> </div>
<div>
    <!-- Barra di ricerca -->
    <input v-model="query" @keyup.enter="search" placeholder="Cerca un film o una serie tv..." />
    <button @click="search">Cerca</button>

    <!-- Messaggi di caricamento ed errore -->
    <div v-if="store.loading">Caricamento...</div>
    <div v-if="store.error">{{ store.error }}</div>
</div>

    
  </header>
     
</template>


<style scoped>

input {
  padding: 8px;
  margin-right: 8px;
}

button {
  padding: 8px;
}

</style>
