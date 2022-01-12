const BASE_URL = "https://pixabay.com/api";
const myKey = '25188312-8cdfcf53729040d6ed9110eb8';



export function fetchImages(value) {
	
  return fetch(`${BASE_URL}/?key=${myKey}&q=${value}&image_type=photo&orientation=horizontal&safesearch =true`)
    .then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}



// export function fetchImages(value) {
// 	axios.get(`${BASE_URL}`, {
//     params: {
// 		 headers:{
// 		      'Content-Type': 'application/json',
// 		Authorization: myKey,
// 		 },
// 		q: value,
// 		image_type: 'photo',
// 		orientation: 'horizontal',
// 		safesearch: true,
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//   });  
// }



