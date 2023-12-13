module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            modules: './src/modules',
            shared: './src/shared',
            services: './src/services',
            repositories: './src/repositories',
            providers: './src/providers',
            assets: './assets',
          },
        },
      ],
    ],
  };
};
