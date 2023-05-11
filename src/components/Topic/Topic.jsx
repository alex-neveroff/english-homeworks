import React from 'react';
import PropTypes from 'prop-types';

function Topic({ topicTitle, topicText }) {
  return (
    <div>
      <h2>{topicTitle}</h2>
      {topicText}
    </div>
  );
}

Topic.propTypes = {
  topicTitle: PropTypes.string.isRequired,
  topicText: PropTypes.string.isRequired,
};

export default Topic;
