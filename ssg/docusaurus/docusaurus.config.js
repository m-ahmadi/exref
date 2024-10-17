// https://docusaurus.io/docs/api/docusaurus-config

const config = {
	presets: [
		[
			'classic',
			{
				docs: {
					routeBasePath: '/', // serve "docs" at site's root
				},
				blog: false,          // disable blog plugin (can delete "blog" dir afterward)
			},
		],
	],
};
