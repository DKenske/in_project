import produce from 'immer';

const INITIAL_STATE = {
  cupoms: [],
  success: false,
  loading: false,
};

export default function GetCupoms(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case '@cupoms/GENERATE_CUPOMS': {
        draft.cupoms = null;
        draft.success = false;
        draft.loading = true;
        break;
      }

      case '@cupoms/INVALIDATE_CUPOMS': {
        draft.cupoms.splice(payload.index, 1);
        console.log(draft.cupoms);
        break;
      }

      case '@cupoms/GENERATE_CUPOMS_SUCCESS': {
        draft.cupoms = payload.cupoms;
        draft.success = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
