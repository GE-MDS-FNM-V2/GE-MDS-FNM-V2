import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS,
  FETCH_RESULT_FAILURE
} from '../actions';

import { mockRequest } from '../../api';

let mockDoFail = false;

function* fetchResultAsync() {
  try {
    console.log(mockDoFail);
    if (mockDoFail) {
      mockDoFail = !mockDoFail;
      throw new Error('This is a fake failed request. Click the button again.');
    } else {
      const result = yield mockRequest();
      yield put({
        type: FETCH_RESULT_SUCCESS,
        payload: result
      });
      mockDoFail = !mockDoFail;
    }
  } catch (e) {
    yield put({
      type: FETCH_RESULT_FAILURE,
      payload: e
    });
  }
}

function* watchFetchResult() {
  yield takeEvery(FETCH_RESULT, fetchResultAsync);
}

export default function* rootSaga() {
  yield all([watchFetchResult()]);
}
