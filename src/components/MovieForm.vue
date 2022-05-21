<template>
  <div class="movies" >
    <template
      v-for="movie in movieList"
      :key="movie.imdbID">
      <MovieCard
        :title="movie.Title"
        :poster="movie.Poster"
        :imdbID="movie.imdbID" />
    </template>
  </div>
  <MovieModal />
</template>

<script>
import MovieCard from './MovieCard.vue';
import MovieModal from './MovieModal.vue';
export default {
	components: {
		MovieCard,
		MovieModal,
	},
	computed: {
		movieList() {
			return this.$store.state.movieDataList;
		},
		showModal() {
			return this.$store.state.isShow;
		},
	},
};
</script>

<style lang="scss" scoped>
.movies {
	margin: {
		left: auto;
		right: auto;
	}
	width: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	
}
</style>