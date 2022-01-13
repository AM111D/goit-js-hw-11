const BASE_URL = "https://pixabay.com/api";
const API_KEY = '25187003-ac92f0861cd819d45c4ecbcb8';


export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 40;
    }

    fetchImages() {
        console.log(this);

        const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;
         return fetch(url)
             .then(responce => responce.json())
             .then(({hits}) => {
                 
                 this.incrementPage();
                //  console.log(data.hits)
                 return hits;
                 
             });
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









// const API_KEY = '25187003-ac92f0861cd819d45c4ecbcb8';
// const BASE_URL = "https://pixabay.com/api/";

// // const axios = require('axios');

// export default class ImagesApiService {
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//         this.totalImages = 100;
//         this.perPage = 30;
//     }

//     fetchImages() {
//         return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&${this.perPage}`)
//             .then(response => response.json())
//             .then(({ hits, totalHits }) => {
//                 this.incrementPage()
//                 this.totalImages = totalHits;
//                 return hits
//             })
//         console.log(hits)
//     }

//     incrementPage() {
//         this.page += 1;
//     }

//     resetPage() {
//         this.Page = 1;
//     }

//     get query() {
//         return this.searchQuery;
//     }

//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }

// }





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

