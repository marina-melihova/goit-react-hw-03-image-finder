import React, { Component } from 'react';

import SearchBar from './searchBar.js/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import Spinner from './spinner/Spinner';
import Button from './button/Button';
import Modal from './modal/Modal';
import imagesApi from '../services/imagesApi';
import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    largeImageUrl: null,
  };

  setLargeImage = url => {
    this.setState({ largeImageUrl: url });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (nextPage > prevPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      // .then(data => {
      //   console.log(data);
      //   const img = [];
      //   data.forEach(item => img.push({ id: item.id, src: item.webformatURL }));
      //   console.log(img);
      // })
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  render() {
    const { images, loading, error, largeImageUrl } = this.state;
    // console.log(images);
    return (
      <div className={styles.App}>
        {error && <div>Something went wrong: {error.message}</div>}
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} setLargeImage={this.setLargeImage} />
        )}
        {loading && <Spinner />}
        {images.length > 0 && !loading && (
          <Button loadImages={this.fetchImages} />
        )}
        {largeImageUrl && (
          <Modal onClose={() => this.setLargeImage(null)}>
            <img src={largeImageUrl} alt="large image" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
