/**
 * Created by appian on 17/3/6.
 */
import { ajaxGet, ajaxPost } from './../../assets/js/tools';

/**
 * 登录请求
 */
export function userLogin(obj) {
	return ajaxPost('/manage/login', obj, 'application/json');
}

/**
 * 登录请求
 */
export function userLoginOut(obj) {
	return ajaxPost('/manage/logout', obj, 'application/json');
}

/**
 * 所有分页获取列表的公共操作
 */
export function generateCommonList(obj) {
	return ajaxGet('', obj);
}

export function getInitList(data) {
  return ajaxPost('/newauth', data);
}

export function getToken() {
  return ajaxGet('/newtest');
}
