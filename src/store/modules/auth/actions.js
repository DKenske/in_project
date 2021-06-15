export function signInRequest(username, password) {
  console.log('hello');
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user },
  };
}

export function signFailure(error) {
  return {
    type: '@auth/SIGN_FAILURE',
    payload: { error },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
