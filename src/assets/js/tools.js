/**
 * 全局调用ajax,默认阻止多次提交问题
 * 以后可以不判断按钮重复提交
 * 支持restful
 * TODO 缺陷! 没有验证data是否相等
 * @param options
 * @example
 url: apiV('test','submit'),
 type : "post",
 data : {
            post :1
        },
 success(res){
            console.log(res,'----post-----');
        }
 })
 */
const isDev = process.env === 'development';
let host;
// 根据后端, 配置不同环境下请求的ip或域名
if (process.env === 'development') {
	host = `http://${window.location.host.split(':')[0]}:1700`;
} else if (process.env === 'test') {
	host = '';
} else if (process.env === 'qa') {
	host = '';
} else if (process.env === 'aws') {
	host = '';
} else if (process.env === 'ali'){
	host = '';
}
const cacheXhr = {};
export function ajax(config) {
	
	const headers = isDev
		? Object.assign({}, config.header || {})
		: Object.assign({}, config.header || {});
	const defaults = {
		url: '',
		type: 'get',
		data: '',
		headers,
		cb: config.success || function success() {},
		error: config.error || function error() {},
	};
	const options = Object.assign({}, defaults, config);
	
	const getCacheXhr = cacheXhr[`${options.url}, ${options.type}`] || '';
	let [url = '', type = ''] = [getCacheXhr.split(',')[0], getCacheXhr.split(',')[1]];
	type = type && type.trim();
	// console.log(`${host}${options.url}`);
	if (options.url === url && options.type === type) return;
	// return new Promise((resolve,reject) => {
	$.ajax({
		url: `${host}${options.url}`,
		type: options.type,
		data: options.data,
		/*xhrFields: {
		 withCredentials: true,
		 },*/
		// accepts : 'application/json',
		contentType: options.contentType ? options.contentType : 'application/x-www-form-urlencoded',
		headers: options.headers,
		beforeSend(xhr) {
			const key = `${options.url}, ${options.type}`;
			cacheXhr[key] = key;
			// xhr.setRequestHeader('Authorization', window.localStorage.getItem('Auth'));
		},
		success(res) {
			// resolve && resolve(res)
			if (options.cb) options.cb(res);
		},
		complete(xhr) {
			delete cacheXhr[`${options.url}, ${options.type}`];
			/*if (xhr.status === 401) window.location = '/v1/apply/auth';
			 if (xhr.status === 403) {
			 alert('非法进入该系统');
			 window.location = '/';
			 }*/
		},
		error(xhr, errType, err) {
			// if(err === 'Unauthorized') return;
			// if(errType === 'abort') return;
			// alert('网络异常请重试' + errType + err);
			options.error(xhr, errType, err);
		},
	});
}
function rejectError(xhr, reject) {
	if (xhr.status === 401) {
		delCookie('SESSION');
		window.localStorage.clear('hasLoginPlatform');
		window.location.href = host;
	}
	console.log(xhr);
	if (xhr.responseJSON && xhr.responseJSON.errCode)
		alert (errorMap(xhr.responseJSON.errCode));
	else
		alert(xhr.responseJSON.errMsg ? xhr.responseJSON.errMsg : '系统未知错误');
	try {
		JSON.parse(xhr.response);
	} catch (e) {
		return console.log(xhr);
	}
	reject(xhr);
}
export function query(name) {
	const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
	const r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

export function GetCookieValue(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie != '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = jQuery.trim(cookies[i]);
			//PYYH=USERNAME=steven&PASSWORD=111111&UserID=1&UserType=1
			if (cookie.substring(0, name.length + 1) == (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				//USERNAME=steven&PASSWORD=111111&UserID=1&UserType=1
				break;
			}
		}
	}
	return cookieValue;
}

export function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
	var cval = GetCookieValue(name);
	document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}

export function ajaxGet(getUrl, getData = {}) {
	return new Promise((resolve, reject) => {
		ajax({
			url: getUrl,
			data: getData,
			success(ret) {
				resolve(ret);
			},
			error(xhr) {
				rejectError(xhr, reject);
			},
		});
	});
}

export function ajaxPost(postUrl, postData = {}, contentType) {
	return new Promise((resolve, reject) => {
		ajax({
			url: postUrl,
			type: 'post',
			data: postData,
			contentType: contentType,
			success(ret) {
				resolve(ret);
			},
			error(xhr) {
				rejectError(xhr, reject);
			},
		});
	});
}

export function ajaxDelete(deleteUrl, deleteData = {}, contentType) {
	return new Promise((resolve, reject) => {
		ajax({
			url: deleteUrl,
			type: 'delete',
			data: deleteData,
			contentType: contentType,
			success(ret) {
				resolve(ret);
			},
			error(xhr) {
				rejectError(xhr, reject);
			},
		});
	});
}

export function ajaxPut(putUrl, putData = {}, contentType) {
	return new Promise((resolve, reject) => {
		ajax({
			url: putUrl,
			type: 'put',
			data: putData,
			contentType: contentType,
			success(ret) {
				resolve(ret);
			},
			error(xhr) {
				rejectError(xhr, reject);
			},
		});
	});
}

export function errorMap(errcode) {
	const errorArr = {
		"E0000": "系统内部错误",
		"E2000": "有必填项未填",
		"E2001": "唯一性检查错误",
		"E2002": "有效性检查错误",
		"E2003": "无效值检查错误",
		"E2004": "类型检查错误",
		"E2005": "未查询到数据",
		"E3000": "平台未授权",
		"E3001": "平台已停用",
		"E3002": "平台授权已过期",
		"E3100": "声连码已停用",
		"E3101": "声连码授权已过期",
		"E3102": "声连码数量超过限制",
		"E3200": "推送状态已停用",
		"E3201": "无推送内容",
		"E3202": "声连码已使用在其他推送配置",
		"E3300": "内容状态已停用",
		"E3400": "应用数量超过限制",
		"E3500": "应用已停用",
		"E3700": "客户已停用",
		"E10001": "未经过授权",
		"E10003": "无权限访问",
		"E10100": "无法识别客户端",
		"E10101": "客户端ID不存在",
		"E10102": "客户端Key/Secret错误",
		"E10103": "无法获取AccessToken",
		"E3800": "代理商客户不存在",
		"E3801": "代理商客户账号已存在",
		"E3802": "代理商已存在",
		"E3803": "代理商状态无效",
		"E3804": "代理商已过期",
		"E3805": "代理商不存在",
		"E3806": "合同不存在",
		"E3807": "代理商更新失败",
		"E3808": "无法设置代理商管理员",
	};
	return errorArr[errcode];
}