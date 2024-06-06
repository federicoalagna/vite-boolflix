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

    return {
      query,
      store,
      search,
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
        <p>Lingua: {{ movie.original_language }}</p>
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
</style>
