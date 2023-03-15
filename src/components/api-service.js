import axios from 'axios';
const API_KEY = '25187003-ac92f0861cd819d45c4ecbcb8';
const BASE_URL = 'https://pixabay.com/api';

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
  }

  fetchArticles() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;
    return fetch(url)
      .then(responce => responce.json())
      .then(data => {
        this.incrementPage();
        console.log(data);
        //  console.log(this.totalImages)
        return data;
      })
      .catch(error => console.error(error));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
