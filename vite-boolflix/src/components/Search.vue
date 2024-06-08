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
    const getFlagUrl = (languageCode) => {
      return `/flags/it.svg${languageCode}.svg`;
    };

    return {
      query,
      store,
      search,
      getFlagUrl,
    };
  },
};


</script>

<template>
  <div>
    <!-- Barra di ricerca -->
    <input v-model="query" @keyup.enter="search" placeholder="Cerca un film o una serie tv..." />
    <button @click="search">Cerca</button>

    <!-- Messaggi di caricamento ed errore -->
    <div v-if="store.loading">Caricamento...</div>
    <div v-if="store.error">{{ store.error }}</div>

    <!-- Lista dei risultati per i film -->
    <h2>Film</h2>
    <ul v-if="store.movies.length">
      <li v-for="movie in store.movies" :key="movie.id">
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
        <p>Voto: {{ movie.vote_average }}</p>
      </li>
    </ul>

    <!-- Lista dei risultati per le serie TV -->
    <h2>Serie TV</h2>
    <ul v-if="store.tvShows.length">
      <li v-for="show in store.tvShows" :key="show.id">
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
        <p>Voto: {{ show.vote_average }}</p>
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
}
.flag {
  width: 24px;
  height: auto; 
  display: inline-block;
}
</style>
