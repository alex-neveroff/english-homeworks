import React, { Component } from 'react';
import topicsJson from '../../data/topics.json';
import TopicList from 'components/TopicList/TopicList';
import Footer from 'components/Footer/Footer';
import Topic from 'components/Topic/Topic';
import Logo from 'components/Logo/Logo';
import { Container, Header, Main, Menu } from './App.styled';

const topics = topicsJson.topics;

export class App extends Component {
  state = {
    topics: topics,
    id: 1,
    showlist: true,
  };

  handleTopicClick = id => {
    this.setState({ showlist: false, id: id });
  };

  handleShowList = () => {
    this.setState({ showlist: true });
  };

  previousTopic = () => {
    this.setState(prevState => ({ id: prevState.id - 1 }));
  };

  nextTopic = () => {
    this.setState(prevState => ({ id: prevState.id + 1 }));
  };

  render() {
    const { topics, showlist, id } = this.state;
    return (
      <Container>
        <Header>
          <Logo />
          <Menu>
            <button onClick={this.handleShowList} className="menu">
              Topics list
            </button>
            <button
              className="menu"
              disabled={showlist || id === 1}
              onClick={this.previousTopic}
            >
              Previous topic
            </button>
            <button
              type="button"
              className="menu"
              disabled={showlist || id === topics.length}
              onClick={this.nextTopic}
            >
              Next topic
            </button>
          </Menu>
        </Header>
        <Main>
          {showlist ? (
            <>
              <h2 className="listTitle">Topic titles</h2>
              <TopicList topics={topics} onClick={this.handleTopicClick} />
            </>
          ) : (
            <Topic topics={topics} id={id} />
          )}
        </Main>
        <Footer />
      </Container>
    );
  }
}

export default App;
