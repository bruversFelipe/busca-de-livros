/* eslint-disable class-methods-use-this */
import axios from '../Utils/axios';

class ListBooks {
  allBooks(id) {
    if (id) {
      return axios.get(`/Livros/${id}`);
    }
    return axios.get('/Livros');
  }
}

export default new ListBooks();
