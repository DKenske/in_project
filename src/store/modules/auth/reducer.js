import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  success: false,
  loading: false,
  signed: false,
  error: false,
};

export default function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case '@auth/SIGN_IN_REQUEST': {
        console.log('hello2');
        draft.loading = true;
        draft.user = null;
        draft.success = false;
        draft.signed = false;
        draft.error = null;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.user = payload.user;
        draft.success = false;
        draft.signed = true;
        draft.error = null;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        draft.user = null;
        draft.success = false;
        draft.signed = false;
        draft.error = payload.error;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.signedFailured = false;
        draft.loading = false;
        draft.error = null;
        break;
      }

      default:
    }
  });
}
