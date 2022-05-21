<template>
  <teleport to="body">
    <template v-if="isShow">
      <div class="modal" @click.self="offModal">
				<div class="modal__inner" >
					<h2>{{moviesDetail.Title}}</h2>
					<img :src="moviesDetail.Poster" alt="poster">
					<h3>Actors : {{moviesDetail.Actors}}</h3>
					<h4>Plot : {{moviesDetail.Plot}}</h4>
				</div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
	computed: {
		isShow() {
			return this.$store.state.isShow;
		},
		moviesDetail() {
			return this.$store.state.moviesDetail
		}
	},
	methods: {
		offModal() {
			this.$store.commit('changeToShowModal')
		}
	}
};
</script>

<style lang="scss" scoped>
.modal {
	background-color: rgba(black, .5);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9;
	display: flex;
	justify-content: center;
	align-items: center;
	&__inner {
		text-align: center;
		width: 400px;
		box-sizing: border-box;
		background-color: white;
		padding : 20px;
		border-radius: 6px;
		box-shadow: 0 10px 10px rgba(black, .2);
	}
}
</style>