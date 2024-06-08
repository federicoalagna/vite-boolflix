<script>


import { ref } from 'vue';
import { store } from '../store';

export default {
  setup() {

    const query = ref('');


    const search = () => {
      if (query.value.trim()) {
        store.searchMovies(query.value);
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
 
    <input v-model="query" @keyup.enter="search" placeholder="Cerca un film..." />
    <button @click="search">Cerca</button>

  

    <!-- Lista dei risultati -->
    <ul v-if="store.movies.length">
      <li v-for="movie in store.movies" :key="movie.id">
        <h3>{{ movie.title }} ({{ movie.original_title }})</h3>
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
        <p>Voto: {{ movie.vote_average }}</p>
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
