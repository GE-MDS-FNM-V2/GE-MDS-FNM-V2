import { put, takeEvery, all, call } from 'redux-saga/effects';
import { FETCH_RESULT, FETCH_RESULT_SUCCESS } from '../actions';

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* fetchResultAsync() {
  yield call(delay, 1000);
  yield put({
    type: FETCH_RESULT_SUCCESS,
    payload: { asfasdf: 'asdfasdfasdf' }
  });
}

export function* watchFetchResult() {
  yield takeEvery(FETCH_RESULT, fetchResultAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchFetchResult()]);
}
