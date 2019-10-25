import { FETCH_RESULT, FETCH_RESULT_SUCCESS } from '../actions';
import initialState from '../initialState';
import axios from 'axios';

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULT:
      // http://dummy.restapiexample.com/api/v1/employees
      return {
        ...state,
        fetchingResult: true
      };
    case FETCH_RESULT_SUCCESS:
      return {
        ...state,
        fetchingResult: false,
        result: action.payload
      };
    default:
      return state;
  }
};
