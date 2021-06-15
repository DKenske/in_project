export function PushComicInCart(comic) {
  return { type: '@cart/PUSH_COMIC_IN_CART', payload: { comic } };
}

export function DeleteComicInCart(index) {
  return { type: '@cart/DELETE_COMIC_IN_CART', payload: { index } };
}

export function CleanCart() {
  console.log('aloalo');
  return { type: '@cart/CLEAR_ALL' };
}
