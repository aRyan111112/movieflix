// require('webpack');

// module.exports = {
//   entry: './app/assets/frontend/main.jsx',
//   output: {
//     path: __dirname + '/app/assets/javascripts',
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel',
//         exclude: /node_modules/,
//         query: {
//           cacheDirectory: true,
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// }

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
