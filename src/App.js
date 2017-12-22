import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer'
import MessageBanner from './components/MessageBanner'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {isVisible: true, push: {commit: {author: {login: ''}}}}
    this.resetVideo = this.resetVideo.bind(this)
  }

  resetVideo() {
    this.setState({isVisible: false})
  }

  componentDidMount(){
    fetch('https://api.github.com/repos/JonasBerger/whistle-men/branches/master?access_token=b79ff3ed15c4f468f02d845993fde65b3ae8bb11')
      .then(res => res.json()).then(res => {this.setState({push: res})})
  }

  render() {
    return (
      <div className="App">
        <MessageBanner push={this.state.push} />
        <VideoPlayer 
            isVisible={this.state.isVisible} 
            videoFinished={this.resetVideo}
          />
      </div>
    );
  }
}

export default App;
