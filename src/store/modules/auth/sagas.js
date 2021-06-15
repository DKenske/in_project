import { all, takeLatest, call, put } from 'redux-saga/effects';
import { decode } from 'jsonwebtoken';
import api from '../../../services/api';

import { signInSuccess, signFailure, signOut } from './actions';

const users = [
  { username: 'master', password: '123456' },
  { username: 'user', password: '123456' },
];

function* signIn({ payload }) {
  const { username, password } = payload;
  let userMatch = false;
  console.log(username, password);
  try {
    const user = {
      name: null,
      role: null,
    };

    users.forEach((item) => {
      console.log(item);
      if (item.username === username && item.password === password) {
        console.log('hello');
        userMatch = true;
      }
    });

    console.log(userMatch);

    if (!userMatch) {
      throw new Error('Not a User');
    }

    switch (username) {
      case 'master':
        user.name = 'Daniel Kenske';
        user.role = 'master';
        break;

      case 'user':
        user.name = 'Daniel Kenske';
        user.role = 'user';
        break;

      default:
        break;
    }

    console.log(user);
    yield put(signInSuccess(user));
  } catch (e) {
    console.log(e);
    yield put(signFailure(e));
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
