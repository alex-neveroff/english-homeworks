import React from 'react';
import PropTypes from 'prop-types';
import { List } from './TopicList.styled';

const TopicList = ({ topics = [], onClick }) => {
  return (
    <List>
      {Array.isArray(topics) &&
        topics.length &&
        topics.map(topic => {
          const { title, id } = topic;
          return (
            <li className="list-item" key={id}>
              <a
                className="list-link"
                href="./"
                onClick={event => {
                  event.preventDefault();
                  onClick(id);
                }}
              >
                {title}
              </a>
            </li>
          );
        })}
    </List>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopicList;
