const KEY = '27630557-6366d2fab585386447c9ca515';
const BASE_URL = 'https://pixabay.com/api/';
export const fetchImages = ({ imagesName, currentPage }) => {
  return fetch(
    `${BASE_URL}?q=${imagesName}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    return response.json();
  });
};
