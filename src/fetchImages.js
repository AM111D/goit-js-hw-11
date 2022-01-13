// const API_KEY = '25187003-ac92f0861cd819d45c4ecbcb8';
// const BASE_URL = "https://pixabay.com/api/";

// const axios = require('axios');

// export default class ImagesApiService {
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//     }
// // https://pixabay.com/api/?key=25187003-ac92f0861cd819d45c4ecbcb8&&image_type=photo&orientation=horizontal&safesearch=true&per_page=40
//     async fetchImages() {
//     const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
//     try {
//         const response = await axios.get(url);
//         return response.data;
//         console.log(response);
        
//     } catch (error) {
//         console.error(error);
//         return { hits: 0, totalHits: 0}
//     }
//     }

//     get query() {
//         return this.searchQuery;
//     }

//     set query(newQuery){
//         this.searcjQuery = newQuery
//     }

//     incrementPage() {
//         this.page += 1;
//     }

//     resetPage() {
//         this.page = 1;
//     }
// }









// const BASE_URL = "https://pixabay.com/api";
// const myKey = '25187003-ac92f0861cd819d45c4ecbcb8';



// export function fetchImages(value) {
	
//   return fetch(`${BASE_URL}/?key=${myKey}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&`)
//     .then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }



