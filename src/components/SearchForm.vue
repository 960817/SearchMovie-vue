<template>
  <div class="search">
    <input
      :value="title"
      class="search--input"
      type="text"
      placeholder="search movie!"
			@keyup.enter="searchTitle"
      @change="changeTitle" />
    <button @click="searchTitle">
      search
    </button>
  </div>
</template>
 
<script>
export default {
	computed: {
		title() {
			return this.$store.state.title;
		}
	},
	methods: {
		async searchTitle() {
			await this.$store.dispatch('fetchMovie', this.title);
			this.$store.state.title = ''
		},
		changeTitle($event) {
			this.$store.commit('changeTitle', $event.target.value);
		}
	}
};
</script>

<style lang="scss" scoped >
.body {
	box-sizing: border-box;
}
.search {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
	&--input {
		padding: 10px;
		width: 500px;
		height: 40px;
		font-size: 32px;
	}
	button {
		height: 65px;
		margin-left: 10px;
		width: 100px;
		border-radius: 10px;
	}
}

</style>