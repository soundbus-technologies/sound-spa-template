import './assets/scss/_reset.scss';
import './main.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import $ from 'jquery';
import ROUTER from './router';
import store from './vuex/store';


if (process.env.NODE_ENV !== 'production') {
	// console.log('There isnt production');
}

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
    hashbang: false,
});

router.map(ROUTER.map);

const app = Vue.extend({
    el() {
        return 'html';
    },
    data() {
        return {
            navlist: ROUTER.list,
            status: ROUTER.status,
            optionArr: [],
            termSelect: 1,
            urlnavArr: [],
        };
    },
    route: {
        data(transition) {
            transition.next();
        },
    },
    methods: {
        homepage() {
            router.go({ name: 'homepage' });
        },
        hide() {
            const $nav = $('#nav');
            const $content = $('#content');
            $nav.toggleClass('hidenav');
            $('#seaInput').toggleClass('hideinput');
            if ($nav.attr('class')) {
                const tempWidth1 = $content.width() + 200;
                $content.css('width', `${tempWidth1}px`);
            } else {
                const tempWidth2 = $content.width() - 200;
                $content.css('width', `${tempWidth2}px`);
            }
        },
        clicktag(num) {
            for (let i = 0; i < this.navlist.length; i++) {
                this.$set(`status[${i}]`, false);
            }
            this.$set(`status[${num}]`, !this.status[num]);
        },
    },
    store,
});

router.start(app, '#app');
window.router = router;
