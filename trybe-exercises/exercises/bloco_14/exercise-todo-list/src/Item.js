import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, onClick } = props
  return (
    <div className="Item" onClick={ onClick }>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
