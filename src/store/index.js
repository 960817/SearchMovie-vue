import {createStore} from 'vuex';

const APIKEY = '7035c60c';

export default createStore({
	state() {
		return{
			title : '',
			movieDataList: [],
			isShow: false,
			imdbID: '',
			moviesDetail: {}
		};
	},
	mutations: {
		getMovieData(state, data) {
			state.movieDataList = data;
		},
		changeTitle(state, text) {
			state.title = text;
		},
		changeToShowModal(state) {
			state.isShow = !state.isShow;
		},
		getDetailMovie(state, data) {
			state.moviesDetail = data
		}
	},
	actions: {
		async fetchMovie({ commit }, title) {
			const movieData = await fetch(`https://www.omdbapi.com?apikey=${APIKEY}&s=${title}`)
				.then(res => res.json());
			commit('getMovieData', movieData.Search);
		},
		async fetchDetailMovie({ commit }, id) {
			const detail = await fetch(`https://www.omdbapi.com?apikey=${APIKEY}&i=${id}&plot=short`)
				.then(res => res.json())
			commit('getDetailMovie', detail)
		}
	}
});