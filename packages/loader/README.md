### 自定义loader

加载本地loader
```
  resolveLoader: {
      modules: [
        'node_modules',
        path.resolve(__dirname, 'loaders')
      ]
    },

```

将 `import a from './aaa'` 替换成为 `import a from './bbb'`

执行build命令后

打开index.html

页面由`Hello World` 变为了 `你好，世界`

