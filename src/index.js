import './css/common.css';
import ImagesApiService from './components/api-service';
import axios from 'axios';
import renderListImage from './components/markup';

const refs = {
  searchForm: document.querySelector('#search-form'),
  imagesContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  refs.imagesContainer.innerHTML = '';
  e.preventDefault();

  imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
  imagesApiService.resetPage();

  imagesApiService.fetchArticles().then(data => {
    if (data.totalHits === 0) {
      return;
    }
    console.log(data);
    refs.imagesContainer.insertAdjacentHTML(
      'beforeend',
      renderListImage(data.hits)
    );
  });
}

function onLoadMore() {
  imagesApiService.fetchArticles().then(data => {
    console.log(data);
    refs.imagesContainer.insertAdjacentHTML(
      'beforeend',
      renderListImage(data.hits)
    );
  });
}
