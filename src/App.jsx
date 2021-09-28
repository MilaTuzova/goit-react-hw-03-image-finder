import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';
import Searchbar from 'Components/Searchbar';
import {fetchImages} from 'Components/services/Api';
import Notiflix from 'notiflix';
import ImageGallery from 'Components/ImageGallery';
import Modal from 'Components/Modal';
import Button from 'Components/Button/Button';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    loading: false,
    images: [],
    totalHits: 0,
    largeImageUrl: null,
    hits: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevImages = prevState.images;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ loading: true });
       
     fetchImages(nextQuery, nextPage).then(respons => {
        // console.log(respons);
        const { totalHits, hits } = respons;

        if (nextPage === 1) {
          this.setState({
            images: [...hits],
            totalHits,
            loading: false,
          });
          // console.log(totalHits);
          // console.log(hits);
        } else {
          this.setState({
            images: [...prevImages, ...hits],
            totalHits,
            page: nextPage,
            loading: false,
          });
        }

        if (totalHits === 0) {
          Notiflix.Notify.failure('Please, enter your query!');
        }
      }).catch(error => console.log(error)).finally(() => {
        
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        })
      }
       
        
      
      );
    }
  }

    handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1 });
  };

  handleLargeImage = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
  };

  toggleModal = () => {
    this.setState(({ largeImageUrl }) => ({
      largeImageUrl: !largeImageUrl,
    }));
  };

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, largeImageUrl, searchQuery, page, loading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={images} onLargeImage={this.handleLargeImage} />

        {loading && <Loader type="Circles" color="#00BFFF" height={80} width={80} />}

        {images.length > 0 && (
          <Button type="button" className="Button" onClickBtn={this.incrementPage} page={page} />
        )}
        {largeImageUrl && (
          <Modal url={this.state.largeImageUrl} onCloseModal={this.toggleModal}>
            <img src={largeImageUrl} alt={searchQuery} />
          </Modal>
        )}
      </div>
    );
  }
}
