import produce from 'immer';

const INITIAL_STATE = {
  comics: [],
};

export default function Collection(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case '@collection/PUSH_COMIC_IN_COLLECTION': {
        console.log(payload.comic);
        payload.comic.forEach((item) => {
          draft.comics.push(item);
        });
        break;
      }

      default:
    }
  });
}
