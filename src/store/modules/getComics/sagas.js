import { all, takeLatest, call, put } from 'redux-saga/effects';
import { decode } from 'jsonwebtoken';
import crypto from 'crypto';
import api from '../../../services/api';

import { GetComicsSuccess, GetComicsFailure } from './actions';

function* getComics({ payload }) {
  const { offset, searchType, searchString } = payload;
  const PUB_KEY = 'b23e000dd44c80eeb45dbb98321cdb51';
  const PRIV_KEY = 'cd5f57786ecc5e187f3f328ce2ba145f011a392d';
  const ts = 1;
  const message = ts + PRIV_KEY + PUB_KEY;
  const md5 = crypto.createHash('md5').update(message).digest('hex');

  try {
    const response = yield api.get('/comics', {
      params: {
        ts: 1,
        apikey: PUB_KEY,
        hash: md5,
        limit: 27,
        offset,
        [searchType]: searchString,
      },
    });

    yield put(GetComicsSuccess(response.data.data));
  } catch (error) {
    yield put(GetComicsFailure(error));
  }
}

export default all([takeLatest('@comics/GET_COMICS_REQUEST', getComics)]);
