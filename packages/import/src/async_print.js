
// 导出默认对象
function print(x) {

  const element = document.createElement('h2');

  element.innerHTML = x;

  document.body.appendChild(element);
}
export default print;
