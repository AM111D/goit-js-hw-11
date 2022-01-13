import './css/styles.css';
import ImagesApiService from './js/api-service';
import hitsTpl from './templates/hits.hbs';
import LoadMoreBtn from './js/load-more-btn';

import SimpleLightbox from '../node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const refs = {
	searchForm: document.querySelector('#search-form'),
	searchBtn: document.querySelector('.searchBtn'),
	galleryContainer: document.querySelector('.gallery'),
	loadMore: document.querySelector('[data-action="load-more"]'),
}

const loadMoreBtn = new LoadMoreBtn({
	selector: '[data-action="load-more"]',
	hidden: true,
})

// console.log(loadMoreBtn)

const imagesApiService = new ImagesApiService();


refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);


function onSearch(e) {
	e.preventDefault();
	
	imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;

	if (imagesApiService.query === '') {
		return alert('Введите что то')
	}

	loadMoreBtn.show();
	
	imagesApiService.resetPage();

	clearContainer()
	fetchHits();
}

function onLoadMore() {
	fetchHits();
	const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});
}



function fetchHits() {
	loadMoreBtn.disable();
	imagesApiService.fetchImages().then(hits => {
		appendHitsMarkup(hits)
		loadMoreBtn.enable();
	});
}

function appendHitsMarkup(hits) {
	refs.galleryContainer.insertAdjacentHTML('beforeend', hitsTpl(hits));
	var lightbox = new SimpleLightbox('.photo-card a', { captionData: 'alt', captionDelay: 250 });
}

function clearContainer() {
	refs.galleryContainer.innerHTML = '';
}



