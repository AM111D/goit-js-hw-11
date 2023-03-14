const callback = entries => {
  entries.forEach(entry => {
    // console.log(entry);
    // console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      console.log(entry);
    }
  });
};
const options = {};

const observer = new IntersectionObserver(callback, options);

const sentinel = document.querySelector('#sentinel');

observer.observe(sentinel);
