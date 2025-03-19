import axios from "axios";
const API_KEY = '49321227-55ab2a796e9f996e0637ef132';


function getData(searchName) {

   return  axios.get('https://pixabay.com/api/', {
        params: {
          key: API_KEY,
          q: searchName,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true
        }
      })
      .then(response => response.data)
      .catch(error => error);

}

export default getData;

