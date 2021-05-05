module.exports = {
  devServer: {
    port: 8000,
    https: false,
    proxy: {
      // '^/': {
      //   target: 'http://localhost:8000'
      // },
      '/api': {
        target: 'https://a.4cdn.org',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false
      },
      '/youtube': {
        target: 'https://www.youtube.com',
        pathRewrite: { '^/youtube': '' },
        changeOrigin: true,
        secure: false
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tm-generate-image/'
    : '/'
}