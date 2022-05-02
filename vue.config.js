const path = require("path");

module.exports = {
  devServer: {
    open: true,
  },

  publicPath: "/",

  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
  },
};
