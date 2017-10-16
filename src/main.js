import './assets/scss/_reset.scss';
import './main.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes';
import store from './vuex/store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Login from './components/Login.vue';
import Tab from './components/Tab.vue';
import Layout from './components/Layout.vue';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		setTimeout(() => {
			console.log(savedPosition);
			window.scrollTo(savedPosition.x, savedPosition.y);
		}, 1000);
		return savedPosition;
	}
	const position = {};
	if (to.hash) {
		position.selector = to.hash;
	}
	if (to.matched.some(m => m.meta.scrollToTop)) {
		position.x = 0;
		position.y = 0;
	}
	return position;
};

const router = new VueRouter({
	routes,
	mode: 'hash',
	linkActiveClass: 'linkActive',
	scrollBehavior,
});

new Vue({
	data: {
		hasLogin: false,
	},
	mounted() {
		this.hasLogin = window.localStorage.getItem('hasLoginPlatform');
	},
	methods: {
		changeStatusTrue() {
			this.hasLogin = true;
		},
		changeStatusFalse() {
			this.hasLogin = false;
		},
	},
	router,
	store,
	components: {
		Login,
		Tab,
		Layout,
	},
}).$mount('#container');

