<template>
  <div class="card">
    <h4>{{ title }}</h4>
    <img
      class="imgPoster"
      :src="poster"
      alt="poster" />
    <div
      class="info-text"
      @click="onModal(imdbID)">
      See More..
    </div>
  </div>
</template>

<script>
export default {
	props: {
		title : {
			type: String,
			default: ''
		},
		poster: {
			type: String,
			default: ''
		},
		imdbID: {
			type: String,
			default: ''
		}
	},
	methods: {
		async onModal(imdbID) {
			await this.$store.dispatch('fetchDetailMovie', imdbID)
			this.$store.commit('changeToShowModal')
			
		}
	},
};
</script>

<style lang="scss" scoped>
.card {	
	text-align: center;
	padding: 20px;
	border: 2px solid black;
	height: 550px;
	.info-text {
		margin-top: 10px;
		text-decoration: underline;
		color:slategray;
		cursor: pointer;
	}	
}
</style>