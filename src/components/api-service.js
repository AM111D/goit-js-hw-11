import axios from 'axios';
const API_KEY = '25187003-ac92f0861cd819d45c4ecbcb8';
const BASE_URL = 'https://pixabay.com/api';

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.perPage = 40;
  }

  async fetchArticles() {
    console.log(this);

    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type='photo'&orientation='horizontal'&safesearch='true'&per_page=20&page=${this.page}`;

    try {
      const {
        data: { hits, totalHits },
      } = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: this.searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: 40,
          page: this.page,
        },
      });

      // console.log({ hits, totalHits });
      return { hits, totalHits };
    } catch (error) {
      console.error(error);
    }
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
