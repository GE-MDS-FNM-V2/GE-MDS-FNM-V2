import {
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS,
  FETCH_RESULT_FAILURE
} from '../actions';
import initialState from '../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULT:
      return {
        ...state,
        fetchingResult: true,
        error: null,
        result: null
      };
    case FETCH_RESULT_SUCCESS:
      return {
        ...state,
        fetchingResult: false,
        result: action.payload,
        error: null
      };
    case FETCH_RESULT_FAILURE:
      return {
        ...state,
        fetchingResult: false,
        result: null,
        error: action.payload
      };
    default:
      return state;
  }
};
