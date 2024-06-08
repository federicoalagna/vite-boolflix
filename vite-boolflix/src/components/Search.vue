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
      <img src="https://edu-boolflix.netlify.app/assets/img/logo.png" alt="Titolo" />
  <div>
    <!-- Barra di ricerca -->
    <input v-model="query" @keyup.enter="search" placeholder="Cerca un film o una serie tv..." />
    <button @click="search">Cerca</button>

    <!-- Messaggi di caricamento ed errore -->
    <div v-if="store.loading">Caricamento...</div>
    <div v-if="store.error">{{ store.error }}</div>

    <!-- Lista dei risultati per i film -->
    <div class="big">Film</div>
    <ul v-if="store.movies.length">
  <li v-for="movie in store.movies" :key="movie.id">
    <img :src="getMovieImageUrl(movie.poster_path)" alt="Copertina di {{ movie.title }}" class="poster" />
    <div class="movie-details">
      <h3>{{ movie.title }} ({{ movie.original_title }})</h3>
      <p>
        Lingua: 
        <img 
          v-if="movie.original_language === 'it'" 
          src="/flags/it.svg" 
          alt="Italian Flag" 
          class="flag" 
        />
        <img 
          v-else-if="movie.original_language === 'en'" 
          src="/flags/en.svg" 
          alt="UK Flag" 
          class="flag" 
        />
        <span v-else>
          {{ movie.original_language }}
        </span>
      </p>
      <!-- condizione per verificare se "vote_average" è definito -->
      <p v-if="movie.vote_average !== undefined" class="stars">
        Voto:
        <!-- Calcolo del numero di stelle piene -->
        <i v-for="i in Math.ceil(movie.vote_average / 2)" class="fas fa-star"></i>
        <!-- Calcolo del numero di stelle vuote -->
        <i v-for="i in Math.ceil((10 - movie.vote_average) / 2)" class="far fa-star"></i>
      </p>
    </div>
  </li>
</ul>

    <!-- Lista dei risultati per le serie TV -->
    <div class="big">Serie TV</div>
    <ul v-if="store.tvShows.length">
  <li v-for="show in store.tvShows" :key="show.id">
    <img :src="getTvShowImageUrl(show.poster_path)" alt="Copertina di {{ show.name }}" class="poster" />
    <div class="tv-show-details">
      <h3>{{ show.name }} ({{ show.original_name }})</h3>
      <p>
        Lingua: 
        <img 
          v-if="show.original_language === 'it'" 
          src="/flags/it.svg" 
          alt="Italian Flag" 
          class="flag" 
        />
        <img 
          v-else-if="show.original_language === 'en'" 
          src="/flags/en.svg" 
          alt="UK Flag" 
          class="flag" 
        />
        <span v-else>
          {{ show.original_language }}
        </span>
      </p>
  
      <p v-if="show.vote_average !== undefined" class="stars">
        Voto:
        <!-- Calcolo del numero di stelle piene -->
        <i v-for="i in Math.ceil(show.vote_average / 2)" class="fas fa-star"></i>
        <!-- Calcolo del numero di stelle vuote -->
        <i v-for="i in Math.ceil((10 - show.vote_average) / 2)" class="far fa-star"></i>
      </p>
    </div>
  </li>
</ul>
  </div>
</template>


<style scoped>

input {
  padding: 8px;
  margin-right: 8px;
}

button {
  padding: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

h3 {
  margin: 0 0 8px 0;
}

.poster {
  width: 100px; 
  margin-right: 16px;
}

.flag {
  width: 24px;
  height: auto; 
  display: inline-block;
  margin-left: 4px;
}
</style>
