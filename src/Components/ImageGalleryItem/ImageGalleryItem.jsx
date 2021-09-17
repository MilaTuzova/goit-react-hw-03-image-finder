import PropTypes from 'prop-types';

function ImageGalleryItem({ image, onClickImage }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={onClickImage}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onClickImage: PropTypes.func,
  image: PropTypes.object,
};

export default ImageGalleryItem;
