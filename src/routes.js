import COMMON from './config/routes/common';

const routes = COMMON.concat(
	{
		path: '*',
		component: { template: '<div>nothing.</div>' },
	},
);

export default routes;
