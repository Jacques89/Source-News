import React, { useState, Component } from 'react'

import Navigation from './components/Navigation/Navigation'
import NewsContainer from './components/NewsContainer/NewsContainer'
import './App.scss'

export default class App extends Component {

  state = {
    topic: '',
  }

  filterNews = topic => {
    this.setState({
      topic: topic
    })
  }
  
  render() {
    return (
      <div>
        <Navigation filterNews={this.filterNews} />
        <NewsContainer currentTopic={this.state.topic} />
      </div>
    )
  }
  
}