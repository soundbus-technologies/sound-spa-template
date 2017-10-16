import Vue from 'vue';
import Vuex from 'vuex';
import xxx from './modules/一级导航业务模块/二级导航业务';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		xxx,
	},
});
