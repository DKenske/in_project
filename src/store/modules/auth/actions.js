export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
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