/* eslint-disable no-plusplus */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { encode } from 'jsonwebtoken';

import { GenerateCuponsSuccess } from './actions';

function* generateCupons() {
  const RareCupom = (index) => {
    return {
      type: 'rare',
      discount: 15,
      id: index,
      code: index * Date.now(),
      status: true,
    };
  };

  const NormalCupom = (index) => {
    return {
      type: 'normal',
      discount: 5,
      id: index,
      code: index * Date.now(),
      status: true,
    };
  };

  const cupoms = new Array(60);

  for (let i = 0; i < cupoms.length; i++) {
    i % 7 === 1 ? (cupoms[i] = RareCupom(i)) : (cupoms[i] = NormalCupom(i));
  }

  yield put(GenerateCuponsSuccess(cupoms));
}

export default all([takeLatest('@comics/GET_COMICS_REQUEST', generateCupons)]);
