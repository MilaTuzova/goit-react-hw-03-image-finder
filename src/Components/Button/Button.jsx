import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  componentDidMount() {
    if (this.props.page === 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  render() {
    return (
      <div className="BtnContainer">
        <button type="button" className="Button" onClick={this.props.onClickBtn}>
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClickBtn: PropTypes.func,
  page: PropTypes.number,
};

export default Button;

