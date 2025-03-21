import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getData from './js/pixabay-api';
import { renderPage, clearGallery } from './js/render-functions';

const form = document.querySelector('.form');
const showLoader = document.querySelector('.loader');
const loadPage = document.querySelector('.btn-load-more');

form.addEventListener('submit', handlerForm);
loadPage.addEventListener('click', handlerLoadPage);
let searchName = '';
let totalHits = 0;
let totalPageImage = 0;
let page = 1;

function handlerForm(event) {
  event.preventDefault();

  totalHits = 0;
  totalPageImage = 0;
  page = 1;

  searchName = form.elements['search-text'].value.trim();
  clearGallery();
  findImage();  
  form.reset();
}

function handlerLoadPage() {
  //---Pagination---
  if (totalHits > 0) {
    page += 1;
    findImage();
    console.log(totalHits);
    if (totalHits > totalPageImage) {
      totalHits = totalHits - totalPageImage;
    } else {
      totalHits = totalHits - totalHits;
    }
  } else {
    console.log("We're sorry, but you've reached the end of search results.");
  }
  //-------
}

async function findImage() {
  loadPage.classList.add('hidden'); 
  console.log(page);
  if (searchName === '') {
    iziToast.error({
      title: 'Error',
      message: 'You should enter text to search!',
    });
  } else {
    showLoader.classList.remove('hidden');

    try {
      const data = await getData(searchName, page);     

      totalPageImage = data.hits.length;
      if (page === 1) {
        totalHits = data.totalHits - totalPageImage;
      }

      console.log(data.hits.length);
      console.log(data);

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderPage(data);
      }

      loadPage.classList.remove('hidden');  

    } catch (error) {
      console.log('Помилка в doStuff:', error);
    }

    showLoader.classList.add('hidden');
  }
}
