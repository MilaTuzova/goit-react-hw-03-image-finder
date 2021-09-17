import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';
import Searchbar from 'Components/Searchbar/Searchbar';
import FetchImages from 'Components/services/Api';
import Notiflix from 'notiflix';
import ImageGallery from 'Components/ImageGallery/ImageGallery';
import Modal from 'Components/Modal';

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    loading: false,
    images: [],
    totalHits: 0,
    largeImageUrl: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const nextPage = this.state.page;
    const prevImages = prevState.images;

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });

      FetchImages(nextQuery).then(respons => {
        const { totalHits, hits } = respons;

        if (nextPage === 1) {
          this.setState({
            images: [...hits],
            totalHits,
          });

          console.log(totalHits);
          console.log(hits);
        } else {
          this.setState({
            images: [...prevImages, ...hits],
            totalHits,
          });
        }

        if (totalHits === 0) {
          Notiflix.Notify.failure('Please, enter your query!');
        }
      });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1 });
  };

  handleLargeImage = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal, largeImageUrl, searchQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={images} onLargeImage={this.handleLargeImage} />

        {largeImageUrl && <Modal url={this.state.largeImageUrl}><img src={largeImageUrl} alt={searchQuery} /></Modal>}
      </div>
    );
  }
}
