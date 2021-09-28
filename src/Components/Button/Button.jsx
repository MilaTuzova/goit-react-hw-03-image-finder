import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClickBtn } = this.props;
    return (
      <div className="BtnContainer">
        <button type="button" className="Button" onClick={onClickBtn}>
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
