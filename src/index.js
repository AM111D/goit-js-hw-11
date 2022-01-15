import './css/styles.css';
import ImagesApiService from './js/api-service';
import hitsTpl from './templates/hits.hbs';
import LoadMoreBtn from './js/load-more-btn';

import SimpleLightbox from '../node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';



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

// Создаем экземпляр класса
const imagesApiService = new ImagesApiService();
// console.log(imagesApiService)

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);


async function onSearch(e) {
	// отмена перезагрузки страница
	e.preventDefault();
	// 
	imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;

	try {
    const { hits, totalHits } = await imagesApiService.fetchImages();

    if (!totalHits) {
      Notify.failure('Sorry, no matches were found for your query.');
      return;
    }

    Notify.success(`Hooray! We found ${totalHits} images.`);
    
  } catch (error) {
    console.log(error.message);
  }

	loadMoreBtn.show();
	
	imagesApiService.resetPage();
	// console.log(imagesApiService.hits.totalHits)
	clearContainer()
	fetchHits();

}

function onLoadMore() {
	fetchHits();
}


  






// async function fetchHits() {
// 	try {
// 		const image = await imagesApiSerive.fetchImages();
// 	} catch (error) {
// 		console.log('Ошибка' + error);
// 	}
// }



function fetchHits() {
	loadMoreBtn.disable();
	imagesApiService.fetchImages().then(data => {
		// console.log(totalImage)
		appendHitsMarkup(data.hits);
		// Notify.success(`Hooray! We found ${data.totalHits} images.`);
		// console.log(data.totalHits);
		loadMoreBtn.enable();
	});
}
// рендер изображений
function appendHitsMarkup(hits) {
	refs.galleryContainer.insertAdjacentHTML('beforeend', hitsTpl(hits));
	var lightbox = new SimpleLightbox('.photo-card a', { captionData: 'alt', captionDelay: 250 });
}
// очистка содержимого
function clearContainer() {
	refs.galleryContainer.innerHTML = '';
}



