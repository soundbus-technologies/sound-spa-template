const COMMON = [{
	path: '/',
	name: 'home',
	component(resolve) {
		require(['../../components/Homepage.vue'], resolve);
	},
	meta: { scrollToTop: true },
}];

module.exports = COMMON;
