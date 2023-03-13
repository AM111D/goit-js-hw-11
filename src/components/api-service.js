export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.perPage = 40;
  }

  fetchArticles() {
    console.log(this);
    const API_KEY = '25187003-ac92f0861cd819d45c4ecbcb8';
    const BASE_URL = 'https://pixabay.com/api';

    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type='photo'&orientation='horizontal'&safesearch='true'&per_page=20&page=${this.page}`;

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        // console.log(data);
        return data;
      });
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
