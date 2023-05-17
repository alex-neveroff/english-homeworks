import React, { useState } from 'react';
import topicsJson from '../../data/topics.json';
import TopicList from 'components/TopicList/TopicList';
import Footer from 'components/Footer/Footer';
import Topic from 'components/Topic/Topic';
import Logo from 'components/Logo/Logo';
import { Container, Header, Main, Menu } from './App.styled';

const topics = topicsJson.topics;

const App = () => {
  const [showlist, setShowlist] = useState(true);
  const [id, setId] = useState(1);

  const handleTopicClick = id => {
    setShowlist(false);
    setId(id);
  };

  const handleShowList = () => {
    setShowlist(true);
  };

  const changeTopic = numb => {
    setId(prevId => prevId + numb);
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
            onClick={() => changeTopic(-1)}
          >
            Previous topic
          </button>
          <button
            type="button"
            className="menu"
            disabled={showlist || id === topics.length}
            onClick={() => changeTopic(1)}
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
