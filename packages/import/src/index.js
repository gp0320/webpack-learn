
function component() {
  const element = document.createElement('div');

  element.innerHTML = '点我动态引入';

  element.onclick = function (e) {

    // 模拟懒加载，按需加载async_print模块
    import(/* webpackChunkName: "async_print" */ './async_print').then((module) => {
      const print = module.default;
      print('动态引入成功');
    });

  };


  return element;
}

document.body.appendChild(component());
