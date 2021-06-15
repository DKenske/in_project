export function GenerateCuponsRequest() {
  return { type: '@cupoms/GENERATE_CUPOMS' };
}

export function InvalidateCuponRequest(index) {
  return { type: '@cupoms/INVALIDATE_CUPOMS', payload: { index } };
}

export function GenerateCuponsSuccess(cupoms) {
  return { type: '@cupoms/GENERATE_CUPOMS_SUCCESS', payload: { cupoms } };
}
