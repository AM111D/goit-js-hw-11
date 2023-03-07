import './css/common.css';
import ImagesApiService from './components/api-service';

const refs = {
  searchForm: document.querySelector('#search-form'),
  imagesContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
  imagesApiService.resetPage();
  imagesApiService.fetchArticles().then(hits => {
    console.log(hits);
  });
}

function onLoadMore() {
  imagesApiService.fetchArticles().then(hits => {
    console.log(hits);
  });
}
