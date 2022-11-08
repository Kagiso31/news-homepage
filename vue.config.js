const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
  //         type: "asset/resource",
  //       },
  //     ],
  //   },
  // },
});
