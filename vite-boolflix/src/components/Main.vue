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

<div class="container-results">


    <!-- Lista dei risultati per i film -->
    <div class="big results">FILM</div>

          <ul class="movies-list" v-if="store.movies.length">
                <li v-for="movie in store.movies" :key="movie.id" class="movie">
                    <div class="movie-wrapper">
                        <div class="poster-wrapper">
                            <img :src="getMovieImageUrl(movie.poster_path)" alt="Copertina di {{ movie.title }}" class="poster" />
                            <div class="overlay">
                                <h3 class="title">{{ movie.title }} ({{ movie.original_title }})</h3>
                                <p class="info">
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
                                            <!-- condizione per verificare se "vote_average" è definito -->
                                            <p v-if="movie.vote_average !== undefined" class="stars hidden">
                                                Voto:
                                                <!-- Calcolo del numero di stelle piene -->
                                                <i v-for="i in Math.ceil(movie.vote_average / 2)" class="fas fa-star"></i>
                                                <!-- Calcolo del numero di stelle vuote -->
                                                <i v-for="i in Math.ceil((10 - movie.vote_average) / 2)" class="far fa-star"></i>
                                            </p>
                                </p> 
                           </div>
                        </div>
                     </div>
                 </li>
            </ul>
        <hr>


            <!-- Lista dei risultati per i film -->
    <div class="big results">SERIE TV</div>

    <ul class="movies-list" v-if="store.tvShows.length">
        <li v-for="show in store.tvShows" :key="show.id" class="movie">
          <div class="movie-wrapper">
              <div class="poster-wrapper">
                <img :src="getTvShowImageUrl(show.poster_path)" alt="Copertina di {{ show.name }}" class="poster" />
                  <div class="overlay">
                    <h3>{{ show.name }} ({{ show.original_name }})</h3>
                    <p class="info">
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
                                  <!-- condizione per verificare se "vote_average" è definito -->
                                  <p v-if="show.vote_average !== undefined" class="stars hidden">
                                      Voto:
                                      <!-- Calcolo del numero di stelle piene -->
                                      <i v-for="i in Math.ceil(show.vote_average / 2)" class="fas fa-star"></i>
                                      <!-- Calcolo del numero di stelle vuote -->
                                      <i v-for="i in Math.ceil((10 - show.vote_average) / 2)" class="far fa-star"></i>
                                  </p>
                      
                 </div>
              </div>
           </div>
       </li>
  </ul>
<hr>
</div>




</template>


<style scoped>

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
  width: 200px; 
padding: 10px;
height: 300px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.523);
  transition: box-shadow 0.3s ease; 
}

.poster:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); 
}

.flag {
  width: 24px;
  height: auto; 
  display: inline-block;
  margin-left: 4px;
}

.results {
    display: flex;
  flex-wrap: wrap;
}

.movies-list,
.tv-shows-list {
  list-style-type: none;
  padding: 0;
}

.movie,
.tv-show {

  display: inline-block;
  margin-left: 10px;
}

hr {
background-color: rgba(255, 255, 255, 0.402);
height: 0.1px;
border: none;
}

.results {
    overflow-x: auto;
    white-space: nowrap;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  opacity: 0; 
  transition: opacity 0.3s ease-in-out; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

.overlay:hover {
  opacity: 1;
}

.title,
.info {
  color: white; 
  text-align: center;
}

.title {
  font-size: 15px;
  margin-bottom: 5px;
}
.poster-wrapper {
  position: relative;
}

.container-results{
    margin: 0 auto;

}
</style>