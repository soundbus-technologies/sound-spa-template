module.exports = {
	"extends": "airbnb-base",
	"parser": "babel-eslint",
	"globals" : {
		"window":true,
		"document":true,
		"$":true,
		"process": true,
		"wangEditor": true,
	},
	"plugins": [
		'html'
	],
	"rules" : {
		"global-require": 0,
		"no-alert": 0,
		"new-cap": 0,
		"no-nested-ternary": 0,
		"indent": [0, "tab"], // 去掉tab约定,IDE会有问题
		"no-trailing-spaces": [0, { "skipBlankLines": true }],// 去掉行未得空格
		"import/first": 0,
		"no-tabs": 0,
		"no-shadow": 0,
		"import/no-dynamic-require": 0,
		"no-unused-vars": 0,
		"arrow-parens": 0,
		"no-undef": 0,
		"no-console": 0,
		"no-param-reassign": 0,
		"no-underscore-dangle": 0,
		/*"eslint no-unused-expressions": ["error", { "allowShortCircuit": true }]*/
	}
};

