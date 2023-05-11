import React, { Component } from 'react';
import topics from '../../data/topics.json';
import Header from 'components/Header/Header';
import TopicList from 'components/TopicList/TopicList';
import Topic from 'components/Topic/Topic';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <TopicList />
          <Topic />
        </main>

        <footer class="footer"></footer>
      </>
    );
  }
}

export default App;
