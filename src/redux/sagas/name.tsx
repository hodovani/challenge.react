import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_NAME_REQUEST, FETCH_NAME_SUCCESS, FETCH_NAME_FAILURE } from '../actions';
import * as API from '../api';

export default [takeLatest(FETCH_NAME_REQUEST, fetchName)];

type FetchName = {
  type: string;
  payload: {
    resolve: (name: IItem) => void;
    reject: (error: string) => void;
    name: string;
  };
};

function* fetchName({ payload: { resolve, reject, name } }: FetchName) {
  try {
    const nameDetails: IItem = yield call(API.fetchName, name);

    resolve(nameDetails);

    yield put({ type: FETCH_NAME_SUCCESS, payload: nameDetails });
  } catch (error) {
    reject(error);

    yield put({ type: FETCH_NAME_FAILURE, payload: error });
  }
}
