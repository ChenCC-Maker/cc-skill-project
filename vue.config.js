// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {

  // 配置@作为src目录的别名
  configureWebpack:{
    resolve:{
      alias:{
        '@':resolve('src')
      }
    }
  }
}
