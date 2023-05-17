import React, { useState } from 'react';
import topicsJson from '../../data/topics.json';
import TopicList from 'components/TopicList/TopicList';
import Footer from 'components/Footer/Footer';
import Topic from 'components/Topic/Topic';
import Logo from 'components/Logo/Logo';
import { Container, Header, Main, Menu } from './App.styled';

const App = () => {
  const topics = topicsJson.topics;
  const [showlist, setShowlist] = useState(true);
  const [id, setId] = useState(1);

  const handleTopicClick = id => {
    setShowlist(false);
    setId(id);
  };

  const handleShowList = () => {
    setShowlist(true);
  };

  const nextTopic = () => {
    setId(prevId => prevId + 1);
  };

  const prevTopic = () => {
    setId(prevId => prevId - 1);
  };

  return (
    <Container>
      <Header>
        <Logo />
        <Menu>
          <button onClick={handleShowList} className="menu">
            Topics list
          </button>
          <button
            className="menu"
            disabled={showlist || id === 1}
            onClick={prevTopic}
          >
            Previous topic
          </button>
          <button
            type="button"
            className="menu"
            disabled={showlist || id === topics.length}
            onClick={nextTopic}
          >
            Next topic
          </button>
        </Menu>
      </Header>
      <Main>
        {showlist ? (
          <>
            <h2 className="listTitle">Topic titles</h2>
            <TopicList topics={topics} onClick={handleTopicClick} />
          </>
        ) : (
          <Topic topics={topics} id={id} />
        )}
      </Main>
      <Footer />
    </Container>
  );
};

export default App;
