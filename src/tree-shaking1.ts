export function used() {
  return 'used';
}

export function notUsed() {
  alert('should not bundle');
  return 'NOT_USED';
}
