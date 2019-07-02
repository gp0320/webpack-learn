
function a() {
  console.log(3245676);
  return b();
}

function b() {
  return 'this is function "b"';
}

function c() {
  return 'this is function "c"';
}



module.exports = {
  a,b,c
}
