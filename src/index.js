import Notiflix from 'notiflix';
import axios, { Axios } from "axios";
import SimpleLightbox from "simplelightbox";
import {fetchImages} from './fetchImages';
import {render} from "./render";

import './css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
	form: document.querySelector('#search-form'),
	gallery: document.querySelector('.gallery'),
}

refs.form.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(e) {
	e.preventDefault();
	const form = e.currentTarget.elements;
	const value = form.searchQuery.value;

fetchImages(value)
.then(response => {
if(response.hits.length === 0){
	Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.")
}
	render(response.hits, refs.gallery);
	
})
.catch((error) => {Notiflix.Notify.error("ERROR")});
e.currentTarget.reset();
}






