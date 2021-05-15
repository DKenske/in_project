import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  token: null,
  loading: false,
  signedFailured: false,
  login: null,
  loginStatus: null,
};

export default function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        draft.token = null;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.token = payload.token;
        draft.signedFailured = false;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        draft.signedFailured = true;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.token = null;
        draft.login = null;
        draft.signedFailured = false;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
