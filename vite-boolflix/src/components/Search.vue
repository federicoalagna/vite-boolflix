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
<div> <img class="logo" src="../../public/logo/logo.png" alt="Titolo" /> </div>
<div class="search">
    <!-- Barra di ricerca -->
    <input v-model="query" @keyup.enter="search" placeholder="Film, Show, Serie TV..." />
    <button class="custom-button" @click="search">Cerca</button>

    <!-- Messaggi di caricamento ed errore -->
    <div v-if="store.loading">Caricamento...</div>
    <div v-if="store.error">{{ store.error }}</div>
</div>

 
  </header>

</template>


<style scoped>

input {

  margin-right: 8px;
  padding: 8px 16px; 
  background-color: #535353cb;  
  color: white;  
  border: none; 
  border-radius: 2px; 

}


.custom-button {
  padding: 8px 16px; 
  background-color: #c30a0a;  
  color: white;  
  border: none; 
  border-radius: 2px; 
  cursor: pointer; 

}

.custom-button:hover {
  background-color: #550505;  
}

.search {
  margin: 0px 20px;
}

.logo {
  width: 250px;
}
</style>
