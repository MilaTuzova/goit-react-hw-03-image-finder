function FetchImages(query) {
  const BASE_URL = 'pixabay.com/api/';
  const KEY = '22661367-29e263943b27fbc7c6f830e79';
  return fetch(
    `https://${BASE_URL}?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Error with ${query}`));
  });
}

export default FetchImages;
