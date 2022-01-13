


`<a class="gallery__link" href="${image.original}">
    <div class="photo-card">
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes<br>${image.likes}</b>
    </p>
    <p class="info-item">
      <b>Views<br>${image.views}</b>
    </p>
    <p class="info-item">
      <b>Comments<br>${image.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads<br>${image.downloads}</b>
    </p>
  </div>
</div>
</a>`









// export const gallery = document.querySelector('.gallery');

// export function render(images) {
// 	const markup = images.map ((image) => {
//     return `<a class="gallery__link" href="${image.original}">
//     <div class="photo-card">
//   <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes<br>${image.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views<br>${image.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments<br>${image.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads<br>${image.downloads}</b>
//     </p>
//   </div>
// </div>
// </a>`}).join("");

//   gallery.insertAdjacentHTML('beforeend', markup)

// }