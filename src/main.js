import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getData from './js/pixabay-api';
import { renderPage, clearGallery } from './js/render-functions';

const form = document.querySelector('.form');
const showLoader = document.querySelector('.loader');
const loadPage = document.querySelector('button[type="button"]');

form.addEventListener('submit', handlerForm);
loadPage.addEventListener('click', handlerLoadPage);
let searchName = '';
let page = 1;

function handlerForm(event) {
  event.preventDefault();
  searchName = form.elements['search-text'].value.trim();
  clearGallery();
  findImage();
  form.reset();
}

function handlerLoadPage() {
  console.log(page);
  page += 1;
  findImage();
}

async function findImage() {
  if (searchName === '') {
    iziToast.error({
      title: 'Error',
      message: 'You should enter text to search!',
    });
  } else {
    showLoader.classList.remove('hidden');

    try {
      const data = await getData(searchName, page);

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderPage(data);
      }
    } catch (error) {
      console.log('Помилка в doStuff:', error);
    }

    showLoader.classList.add('hidden');
  }
}
