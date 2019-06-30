
import a from './aaa'
function component() {
  const element = document.createElement('div');
  element.innerHTML = a;
  console.log(a)
  return element;
}

document.body.appendChild(component());
