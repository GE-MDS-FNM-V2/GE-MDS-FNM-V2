import Axios from 'axios';

export const mockRequest = () => {
  // return Axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return Axios.get('http://localhost:9000/dirname');
};
