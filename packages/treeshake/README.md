### tree-shaking demo

index.js 内包含两种写法
```
var tree = require('./tree-shaking.js');
tree.a();


import { a } from "./import-tree-shaking.js";
a()

```
`npm run build`后，分析dist里面的js文件
* import-tree-shaking这个字符串只有一个，import这种方式，另外没用的被shake了
* this is 这个字符有三个，require的方式没有被shake




