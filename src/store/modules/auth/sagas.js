import { all, takeLatest, call, put } from 'redux-saga/effects';
import { decode } from 'jsonwebtoken';
import api from '../../../services/api';

import { signInSuccess, signFailure, signOut } from './actions';

function* signIn({ payload }) {
  try {
    const response = yield call(
      api.post,
      '/auth/token',
      {},
      {
        auth: payload,
      }
    );

    const validation = yield call(api.get, '/auth/token/validate', {
      headers: { token: response.data.token },
    });

    const userData = {
      data: validation.data,
    };

    yield put(signInSuccess(response.data.token, userData));
  } catch (error) {
    yield put(signFailure(error));
  }
}

function* setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    const { exp: tokenExpiration } = decode(token);
    if (tokenExpiration <= Math.floor(Date.now() / 1000)) {
      yield put(signOut());
    }
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
