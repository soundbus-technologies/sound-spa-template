import COMMON from './config/routes/common';
import USER from './config/routes/user';

const routes = COMMON.concat(
	USER.usermap,
	{
		path: '*',
		component: { template: '<div>nothing</div>' },
	},
);

export default routes;
