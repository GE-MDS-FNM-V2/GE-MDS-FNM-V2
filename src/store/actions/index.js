import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

export const FETCH_RESULT = 'FETCH_RESULT';
export const FETCH_RESULT_SUCCESS = 'FETCH_RESULT_SUCCESS';
export const RECEIVED_RESULT = 'RECEIVED_RESULT';

const delay = ms => new Promise(res => setTimeout(res, ms));

export const fetchResult = () => {
  return { type: FETCH_RESULT };
};
