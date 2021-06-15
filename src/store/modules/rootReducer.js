import { combineReducers } from 'redux';
import auth from './auth/reducer';
import getComics from './getComics/reducer';
import cart from './cart/reducer';
import cupoms from './coupons/reducer';
import collection from './collection/reducer';

export default combineReducers({ auth, getComics, cart, cupoms, collection });
