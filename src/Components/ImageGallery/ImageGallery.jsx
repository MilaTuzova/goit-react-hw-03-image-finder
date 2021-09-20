import { Component } from 'react';
import ImageGalleryItem from 'Components/ImageGalleryItem';

import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { searchQuery, onLargeImage } = this.props;

    return (
      <div>
        <ul className="ImageGallery">
          {searchQuery.map(image => {
            console.log(image);
            console.log(image.largeImageURL);

            const onSelectLargeImg = () => onLargeImage(image.largeImageURL);

            return (
              <ImageGalleryItem key={image.id} image={image} onClickImage={onSelectLargeImg} />
            );
          })}
        </ul>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  onLargeImage: PropTypes.func,
  images: PropTypes.array,
};

export default ImageGallery;
