module.exports =function(api) {
  api.cache(true); 
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '^@app/(.+)': './src/\\1',
            "@components": "./src/components",
          },
        },
      ],
    ],
  }
}