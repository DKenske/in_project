import produce from 'immer';

const INITIAL_STATE = {
  comics: [],
};

export default function Collection(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case '@cart/PUSH_COMIC_IN_CART': {
        draft.comics.push(payload.comic);
        break;
      }

      case '@cart/DELETE_COMIC_IN_CART': {
        draft.comics.splice(payload.index, 1);
        break;
      }

      case '@cart/CLEAR_ALL': {
        console.log('aloalo');
        draft.comics = [];
        break;
      }

      default:
    }
  });
}
