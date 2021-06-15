export function PushComicInCollection(comic) {
  return { type: '@collection/PUSH_COMIC_IN_COLLECTION', payload: { comic } };
}
