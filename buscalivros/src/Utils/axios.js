import axios from 'axios';

const baseURL = 'http://biblioteca.supero.com.br/api/';

export default axios.create({
  baseURL,
});
