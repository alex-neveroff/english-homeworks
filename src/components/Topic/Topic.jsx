import React from 'react';
import PropTypes from 'prop-types';
import { TopicWrap } from './Topic.styled';

function Topic({ topics, id }) {
  const topic = topics.find(topic => topic.id === id);
  const paragraphs = topic.text.split('\n').map((paragraph, index) => (
    <p className="main-text" key={index}>
      {paragraph}
    </p>
  ));
  return (
    <>
      {topic && (
        <TopicWrap>
          <h2 className="topic-title">{topic.title}</h2>
          {paragraphs}
        </TopicWrap>
      )}
    </>
  );
}

Topic.propTypes = {
  topics: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};

export default Topic;
