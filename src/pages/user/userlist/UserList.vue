<template>
	<div>
		<div class="layout-breadcrumb">
			<Breadcrumb>
				<Breadcrumb-item href="/">首页</Breadcrumb-item>
				<Breadcrumb-item>xxx</Breadcrumb-item>
				<Breadcrumb-item>yyy</Breadcrumb-item>
			</Breadcrumb>
		</div>
    <p>打开控制台看返回的数据</p>
	</div>
</template>

<style lang="scss">
	header {
		padding: 20px 0 0 10px;
	}
	.input-block {
		b, div {
			display: inline-block;
			width: 200px;
			padding: 0 10px 10px 0;
			vertical-align: bottom;
		}
		span {
			display: inline-block;
			vertical-align: top;
			margin: 0 0 0 10px;
		}
	}

	.model-item {
		position: relative;
		background: #fff;
		font-size: 16px;
		b {
			display: inline-block;
			padding: 10px 10px 5px 10px;
			width: 120px;
			box-sizing: border-box;
			text-align: right;
			vertical-align: top;
			color: #444;
		}
		&:before {
			position: absolute;
			display: inline-block;
			content: '';
			width: 480px;
			height: 1px;
			bottom: 0;
			left: 0;
			background: #f6f6f6;
		}
		&:last-child:before {
			display: none!important;
		}
		p {
			display: inline-block;
			width: 350px;
			text-align: left;
			padding: 10px 5px 10px 0;
			line-height: 1.5;
			color: #888;
		}
	}
</style>

<script>
	import { initUserlist } from './../../../config/apis/user.api';

	export default {
		data() {
			return {};
		},
		mounted() {
      initUserlist({
				page: 0,
				limit: 10,
			}).then(ret => {
				console.log(ret);
			});
		},
		methods: {
		},
	};
</script>
