export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cd9722a6.js","app":"_app/immutable/entry/app.15a0bab9.js","imports":["_app/immutable/entry/start.cd9722a6.js","_app/immutable/chunks/index.ff905984.js","_app/immutable/chunks/singletons.0829c897.js","_app/immutable/chunks/index.79947254.js","_app/immutable/entry/app.15a0bab9.js","_app/immutable/chunks/index.ff905984.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/scrollies",
				pattern: /^\/scrollies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/scrollies/0-ran",
				pattern: /^\/scrollies\/0-ran\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/scrollies/scrolly-1",
				pattern: /^\/scrollies\/scrolly-1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
