### 懒加载

执行 `yarn build `
在dist目录打开index.html ，打开网络面板，点击文字可以看到效果。

如果使用了 `babel-loader`
```
{
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader"
          }]
        }
```
报以下错误
```
SyntaxError: 'import' and 'export' may only appear at the top level (10:4)
```
在`.babelrc` 文件添加`stage-0`

或者 不用 `babel-loader` 也可以实现

由此可见`stage-0` 只是语法检查？
### "modules": false 作用
"modules": false: 关闭babel的模块转换功能，保留原本的es6模块化语法。
可以分别指定'commonjs' (default), 'amd', 'umd', 'systemjs' 这些值对比生成后的区别
```
The 'modules' option must be either 'false' to indicate no modules, or a
    module type which can be be one of: 'commonjs' (default), 'amd', 'umd', 'systemjs'
```
