import { Component } from 'react';
import ImageGalleryItem from 'Components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { searchQuery } = this.props;

    return (
      <div>
        <ul className="ImageGallery">
          {searchQuery.map(image => {
            console.log(image)
            return <ImageGalleryItem key={image.id} image={image} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
