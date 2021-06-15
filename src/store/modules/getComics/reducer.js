import produce from 'immer';

const INITIAL_STATE = {
  data: null,
  success: false,
  loading: false,
};

export default function getComics(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case '@comics/GET_COMICS_REQUEST': {
        draft.loading = true;
        draft.data = null;
        draft.success = false;
        break;
      }

      case '@comics/GET_COMICS_SUCCESS': {
        draft.loading = false;
        draft.data = payload.data;
        draft.success = true;
        break;
      }

      case '@comics/GET_COMICS_FAILURE': {
        draft.loading = false;
        draft.data = null;
        draft.success = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.loading = false;
        draft.data = null;
        draft.success = false;
        break;
      }

      default:
    }
  });
}
