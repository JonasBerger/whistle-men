import React, { Component } from 'react';
import './base.css';
import VideoPlayer from './components/VideoPlayer'
import Timer from './components/Timer'
import MessageBanner from './components/MessageBanner'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {isVisible: false, changedProjects: [],  currentProject: {commit: {sha:'', commit:{message: ''}, author: {login: ''}}}}
    this.doUpdate = this.doUpdate.bind(this)
    this.playlistFinished = this.playlistFinished.bind(this)
    this.setMessage = this.setMessage.bind(this)
  }

  doUpdate(changedProjects) {
    this.setState({changedProjects, isVisible: true})
    this.refs.player.createPlaylistWithProject()
  }

  playlistFinished() {
      this.setState({isVisible: false})
  }

  setMessage(currentProject){
    if ('speechSynthesis' in window) {
      const msg = `${currentProject.commit.author.login} commited: ${currentProject.commit.commit.message}`
      const utterThis = new SpeechSynthesisUtterance(msg);
      window.speechSynthesis.speak(utterThis)
    }
    this.setState({currentProject})
  }

  render() {
    return (
      <div className="App">
        <MessageBanner isVisible={this.state.isVisible} project={this.state.currentProject}/>
        <Timer doUpdate={this.doUpdate} />
        <VideoPlayer 
            ref="player"
            projects={this.state.changedProjects}
            playlistFinished={this.playlistFinished}
            isVisible={this.state.isVisible} 
            setMessage={this.setMessage}
          />
      </div>
    );
  }
}

export default App;
