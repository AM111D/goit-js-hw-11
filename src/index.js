import './css/common.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ImagesApiService from './components/api-service';
import renderListImage from './components/markup';
import { scroll } from './components/scroll';

const refs = {
  searchForm: document.querySelector('#search-form'),
  imagesContainer: document.querySelector('.gallery'),
  sentinel: document.querySelector('#sentinel'),
};

const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  refs.imagesContainer.innerHTML = '';

  imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
  imagesApiService.resetPage();

  imagesApiService.fetchArticles().then(data => {
    if (data.totalHits === 0) {
      return Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    Notiflix.Notify.success(`"Hooray! We found ${data.totalHits} images.`);

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.on('show.simplelightbox', function () {});

    refs.imagesContainer.insertAdjacentHTML(
      'beforeend',
      renderListImage(data.hits)
    );
    imagesApiService.incrementPage();
    scroll();
    registerIntersectionObserve();
  });
}

function registerIntersectionObserve() {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.isIntersecting && imagesApiService.searchQuery !== '') {
          imagesApiService.fetchArticles().then(data => {
            if (!data.hits.length) {
              Notiflix.Notify.info(
                `We're sorry, but you've reached the end of search results.`
              );
            }
            refs.imagesContainer.insertAdjacentHTML(
              'beforeend',
              renderListImage(data.hits)
            );
            imagesApiService.incrementPage();
          });
        }
      }
    });
  };

  const options = {
    rootMargin: '500px',
  };
  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(document.querySelector('#sentinel'));
}
