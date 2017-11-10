import {
	GET_USER_USERLIST,
	ADD_TOTAL,
} from './../../mutation-types';

import { initUserlist } from '../../../config/apis/user.api';


const state = {
	list: [],
	totalPages: -1, // 总页数
	number: -1, // 当前页数
};

const getters = {
	list: state => state.list,
	totalPages: state => state.totalPages,
	number: state => state.number,
};

const actions = {
	initlist({ commit, state }) {
		initUserlist().then(ret => {
			console.log(ret);
			if (ret.errCode === 0) {
				commit(GET_USER_USERLIST, ret);
			} else alert(`error: ${ret.errMsg}`);
		});
	},
	reset2({ commit, state }, item) {
		item += state.totalPages;
		commit(ADD_TOTAL, {
			totalPages: item,
		});
	},
};

const mutations = {
	[GET_USER_USERLIST](state, ret) {
		Object.assign(state, ret);
	},
	[ADD_TOTAL](state, ret) {
		Object.assign(state, ret);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
