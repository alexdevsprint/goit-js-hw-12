import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getData from './js/pixabay-api';
import { renderPage, clearGallery, scrollPage } from './js/render-functions';

const form = document.querySelector('.form');
const showLoader = document.querySelector('.loader');
const loadPage = document.querySelector('.btn-load-more');

form.addEventListener('submit', handlerForm);
loadPage.addEventListener('click', handlerLoadPage);
const per_page = 15;
let searchName = '';
let totalPage = 0;
let page = 0;

function handlerForm(event) {
  event.preventDefault();

  page = 1;

  searchName = form.elements['search-text'].value.trim();
  clearGallery();
  findImage();
  form.reset();
}

function handlerLoadPage() {
  //---Pagination---
  if (totalPage >= page + 1) {
    page += 1;
    findImage();    
  } else {
    iziToast.error({
      title: 'Error',
      message: "We're sorry, but you've reached the end of search results.",
    });
    loadPage.classList.add('hidden');
  }
  //-------
}

async function findImage() {
  loadPage.classList.add('hidden');
  // console.log(page);
  // console.log(totalPage);
  if (searchName === '') {
    iziToast.error({
      title: 'Error',
      message: 'You should enter text to search!',
    });
  } else {
    showLoader.classList.remove('hidden');

    try {
      const data = await getData(searchName, page, per_page);

      if (page === 1) {
        totalPage = Math.ceil(data.totalHits / per_page);
      }

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderPage(data);
      }
      if (totalPage >= page) {
        loadPage.classList.remove('hidden');
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something wrong, try again later!',
      });
    } finally {      
      showLoader.classList.add('hidden');      
      if (page > 1) {
        scrollPage();
      }
    }

    
  }
}
