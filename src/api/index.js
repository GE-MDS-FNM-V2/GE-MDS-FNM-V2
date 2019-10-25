import Axios from 'axios';

export const mockRequest = () => {
  return Axios.get('http://dummy.restapiexample.com/api/v1/employees');
};
