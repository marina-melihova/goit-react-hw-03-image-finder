import React, { Component } from 'react';
import SearchBar from './searchBar.js/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import Spinner from './spinner/Spinner';
import Button from './button/Button';
import Modal from './modal/Modal';
import Notification from './notification/Notification';
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
    pageCount: 0,
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
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.images],
          page: prevState.page + 1,
          pageCount: Math.ceil(data.total / 12),
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      pageCount: 0,
      images: [],
    });
  };

  render() {
    const {
      images,
      loading,
      error,
      largeImageUrl,
      page,
      pageCount,
    } = this.state;
    return (
      <div className={styles.App}>
        {error && (
          <Notification message={`Something went wrong: ${error.message}`} />
        )}
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} setLargeImage={this.setLargeImage} />
        )}
        {loading && <Spinner />}
        {page <= pageCount && !loading && (
          <Button loadImages={this.fetchImages} />
        )}
        {page > 1 && !pageCount && (
          <Notification message="No images found for your search" />
        )}
        {largeImageUrl && (
          <Modal onClose={() => this.setLargeImage(null)}>
            <img src={largeImageUrl} alt="view large" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
