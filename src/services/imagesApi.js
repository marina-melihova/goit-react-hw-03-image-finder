import axios from 'axios';

const API_KEY = '17552314-2488ac3d167da7c7e0d9d1cd2';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
    )
    .then(response => {
      const images = response.data.hits.map(
        ({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        }),
      );
      const { total } = response.data;
      return { images, total };
    });
};

export default { fetchImagesWithQuery };
