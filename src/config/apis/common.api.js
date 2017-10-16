import { ajaxGet, ajaxPost } from './../../assets/js/tools';

/**
 * 登录
 */
export function userLogin(obj) {
	return ajaxPost('', obj, 'application/json');
}

/**
 * 登出
 */
export function userLoginOut(obj) {
	return ajaxPost('', obj, 'application/json');
}

/**
 * 所有分页获取列表的公共操作
 */
export function generateCommonList(obj) {
	return ajaxGet('', obj);
}
