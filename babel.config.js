module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@ui': './src/ui',
          src: './src',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
