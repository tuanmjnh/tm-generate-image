module.exports = {
  devServer: {
    port: 8000,
    https: false
    // proxy: {
    //   // '^/': {
    //   //   target: 'http://localhost:8000'
    //   // },
    //   '/embed': {
    //     target: 'https://www.youtube.com/embed',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tm-generate-image/'
    : '/tm-generate-image/'
}