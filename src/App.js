import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer'
import MessageBanner from './components/MessageBanner'
import Timer from './components/Timer'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {isVisible: true, changedProjects: []}
    this.resetVideo = this.resetVideo.bind(this)
    this.doUpdate = this.doUpdate.bind(this)
  }

  resetVideo() {
    this.setState({isVisible: false})
  }

  doUpdate(changedProjects) {
    console.log(changedProjects)
    this.setState({changedProjects})
  }

  render() {
    return (
      <div className="App">
        <Timer doUpdate={this.doUpdate} />
        <VideoPlayer 
            projects={this.state.changedProjects}
            isVisible={this.state.isVisible} 
            videoFinished={this.resetVideo}
          />
      </div>
    );
  }
}

export default App;
