import axios from 'axios';
const API_KEY = '49321227-55ab2a796e9f996e0637ef132';

async function getData(searchName, page = 1, per_page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: searchName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: per_page,
      },
    });

    return response.data;
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Something wrong, try again later!',
    });
  }
}
export default getData;
