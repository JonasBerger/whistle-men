import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer'
import Timer from './components/Timer'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {isVisible: true, changedProjects: []}
    this.doUpdate = this.doUpdate.bind(this)
    this.playlistFinished = this.playlistFinished.bind(this)
  }

  doUpdate(changedProjects) {
    this.setState({changedProjects, isVisible: true})
    this.refs.player.createPlaylistWithProject()
  }

  playlistFinished() {
      this.setState({isVisible: false})
  }

  render() {
    return (
      <div className="App">
        <Timer doUpdate={this.doUpdate} />
        <VideoPlayer 
            ref="player"
            projects={this.state.changedProjects}
            playlistFinished={this.playlistFinished}
            isVisible={this.state.isVisible} 
          />
      </div>
    );
  }
}

export default App;
