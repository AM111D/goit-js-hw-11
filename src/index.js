import './css/common.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ImagesApiService from './components/api-service';
import renderListImage from './components/markup';
import './components/io';

const refs = {
  searchForm: document.querySelector('#search-form'),
  imagesContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.loadMoreBtn.disabled = true;

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  refs.loadMoreBtn.disabled = false;
  refs.imagesContainer.innerHTML = '';
  e.preventDefault();

  imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
  imagesApiService.resetPage();

  imagesApiService.fetchArticles().then(data => {
    if (data.totalHits === 0) {
      return Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    console.log(data);
    Notiflix.Notify.success(`"Hooray! We found ${data.totalHits} images.`);

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.on('show.simplelightbox', function () {});

    refs.imagesContainer.insertAdjacentHTML(
      'beforeend',
      renderListImage(data.hits)
    );
  });
  imagesApiService.incrementPage();
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
