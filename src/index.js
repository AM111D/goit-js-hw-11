import './css/styles.css';
import ImagesApiService from './js/api-service';
import hitsTpl from './templates/hits.hbs';

const refs = {
	searchForm: document.querySelector('#search-form'),
	searchBtn: document.querySelector('.searchBtn'),
	galleryContainer: document.querySelector('.gallery'),
	loadMoreBtn: document.querySelector('.load-more'),
}

const imagesApiService = new ImagesApiService();
console.log(imagesApiService);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
	e.preventDefault();
	
	imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;

	imagesApiService.resetPage();

	imagesApiService.fetchImages().then(hits => {
		clearContainer()
		appendHitsMarkup(hits)
	});
}

function onLoadMore() {
	imagesApiService.fetchImages().then(appendHitsMarkup);
	// console.log(imagesApiService.fetchImages())
}

function appendHitsMarkup(hits) {
	refs.galleryContainer.insertAdjacentHTML('beforeend', hitsTpl(hits));
}

function clearContainer() {
	refs.galleryContainer.innerHTML = '';
}



