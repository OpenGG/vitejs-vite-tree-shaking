export function used2() {
  return 'used2';
}

export function notUsed2() {
  alert('should not bundle');
  return 'NOT_USED_2';
}
