export function a() {
  console.log('import-tree-shaking  a');
  return b();
}

export function b() {
  return 'this is import-tree-shaking "b"';
}

export function c() {
  return 'this is import-tree-shaking "c"';
}
