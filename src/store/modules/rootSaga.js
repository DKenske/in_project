import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import getComics from './getComics/sagas';
import cupoms from './coupons/sagas';

export default function* rootSaga() {
  return yield all([auth, getComics, cupoms]);
}
