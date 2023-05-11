import React from 'react';
import PropTypes from 'prop-types';

function TopicList({ topics = [], onClick }) {
  return (
    <ol className="list">
      {Array.isArray(topics) &&
        topics.length &&
        topics.map(topic => {
          const { title, text, id } = topic;
          return (
            <li className="list-item" key={id}>
              <p onClick={() => onClick(title, text)}>{title}</p>
            </li>
          );
        })}
    </ol>
  );
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopicList;
