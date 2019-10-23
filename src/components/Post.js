import React from 'react';
import PropTypes from 'prop-types';

function Post({ data }) {
  const {
    author: { avatar, name },
    date,
    content,
  } = data;

  return (
    <li>
      <div className="author-info">
        <img src={avatar} alt="avatar" />
        <div className="post-data">
          <strong>{name}</strong>
          <small className="date">{date}</small>
        </div>
      </div>
      <p>{content}</p>
    </li>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
