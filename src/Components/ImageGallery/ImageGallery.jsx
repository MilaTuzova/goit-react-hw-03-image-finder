import { Component } from 'react';
import ImageGalleryItem from 'Components/ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { searchQuery, onLargeImage } = this.props;

    return (
      <div>
        <ul className="ImageGallery">
          {searchQuery.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onClickImage={() => onLargeImage(image.largeImageURL)}
              />
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
