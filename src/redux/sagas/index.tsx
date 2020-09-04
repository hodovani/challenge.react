import { all } from 'redux-saga/effects';
import nameSagas from './name';

export default function* rootSaga() {
  yield all([...nameSagas]);
}
