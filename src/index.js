import onSearch from './onSearch';

const refs = {
  searchForm: document.querySelector('#search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);
