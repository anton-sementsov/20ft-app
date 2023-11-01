module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'babel-plugin-root-import',
				{ rootPathSuffix: 'app/', rootPathPrefix: '@/' }
			],
			['nativewind/babel']
		]
	}
}
