<style lang="sass" scoped>
	$tabHeight: 60px;
	.layout-logo {
		position: relative;
		margin: 5px 0 5px 10px;
		width: 100px;
		height: 50px;
		background: url('./../assets/images/logo.png') no-repeat;
		background-size: contain;
		background-position: center;
		border-radius: 3px;
		float: left;
		&:after {
			content: '声动平台';
			position: absolute;
			right: -70px;
			top: -4px;
			color: #777;
			font-size: 16px;
			letter-spacing: 1px;
		}
	}

	.layout-ceiling {
		height: $tabHeight;
		line-height: $tabHeight;
		background: #fafafa;
		overflow: hidden;
		box-shadow: 0 5px 10px rgba(0,0,0,.1);
	}

	.layout-ceiling-main {
		float: right;
		margin-right: 25px;
	}

	.layout-ceiling-main a {
		color: #686868;
		font-size: 14px;
		font-weight: 400;
		margin: 0 5px;
		&:hover {
			color: #F36F70;
		}
	}
</style>
<template>
	<div class="layout-ceiling">
		<a href="#"><div class="layout-logo"></div></a>
		<div class="layout-ceiling-main">
			<a href="#" @click="loginOut">登出</a> |
			<a href="#">开放平台</a> |
			<a href="#">应用平台</a> |
			<a href="#">管理平台</a>
		</div>
	</div>
</template>
<script>
	import { userLoginOut } from './../config/apis/common.api';

	export default {
		data() {
			return {
			};
		},
		methods: {
			loginOut() {
				userLoginOut().then(() => {
					this.delCookie('SESSION');
					window.localStorage.clear('hasLoginPlatform');
					this.$emit('login-out');
				});
			},
			GetCookieValue(name) {
				let cookieValue = null;
				let cookie = '';
				if (document.cookie && document.cookie !== '') {
					const cookies = document.cookie.split(';');
					for (let i = 0; i < cookies.length; i += 1) {
						cookie = jQuery.trim(cookies[i]);
						if (cookie.substring(0, name.length + 1) === (`${name}=`)) {
							cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
							break;
						}
					}
				}
				return cookieValue;
			},
			delCookie(name) {
				const exp = new Date();
				exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
				const cval = this.GetCookieValue(name);
				document.cookie = `${name}=${cval}; expires=${exp.toGMTString()}`;
			},
		},
	};
</script>

