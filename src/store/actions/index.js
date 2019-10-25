import { mockRequest } from '../../api';

export const FETCH_RESULT = 'FETCH_RESULT';
export const FETCH_RESULT_SUCCESS = 'FETCH_RESULT_SUCCESS';
export const FETCH_RESULT_FAILURE = 'FETCH_RESULT_FAILURE';

let doFail = false;
export const fetchResult = () => {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_RESULT });

    if (doFail) {
      dispatch({
        type: FETCH_RESULT_FAILURE,
        payload: 'This is a fake failed request. Click the button again'
      });
    } else {
      mockRequest()
        .then(result => {
          dispatch({
            type: FETCH_RESULT_SUCCESS,
            payload: result.data
          });
        })
        .catch(e => {
          dispatch({
            type: FETCH_RESULT_FAILURE,
            payload: e
          });
        });
    }
    doFail = !doFail;
  };
};
