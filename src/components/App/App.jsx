import React, { Component } from 'react';
import topicsJson from '../../data/topics.json';
import Header from 'components/Header/Header';
import TopicList from 'components/TopicList/TopicList';
import Footer from 'components/Footer/Footer';
import Topic from 'components/Topic/Topic';

const topics = topicsJson.topics;

export class App extends Component {
  state = {
    topics: topics,
    id: 1,
    showlist: true,
    title: '',
    text: '',
  };

  handleTopicClick = (title, text) => {
    this.setState({ showlist: false, title: title, text: text });
  };

  render() {
    const { topics, showlist, title, text } = this.state;
    return (
      <>
        <Header />
        <main>
          {showlist ? (
            <TopicList topics={topics} onClick={this.handleTopicClick} />
          ) : (
            <Topic topicTitle={title} topicText={text} />
          )}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
