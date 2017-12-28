import React from 'react'
import {config} from '../config'

export default class VideoPlayer extends React.Component {
	constructor(props){
		super(props)
		this.playlistFinished = this.playlistFinished.bind(this)
		this.state = {changeSize: 0}
	}

	createPlaylistWithProject(){
		if(this.props.projects.length && this.props.isVisible){
			if(this.isPlaying()){
					this.refs.video.load()
			}
			const changeSize = this.props.projects.length -1
			const currentProject = this.props.projects[changeSize]
			this.setState({changeSize, source: this.shuffleVideos(), currentProject})
			this.refs.video.play()
			this.props.setMessage(currentProject)
		}
	}

	isPlaying(){
		const {video} = this.refs
		return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2
	}


	shuffleVideos(){
		const randomVideo = Math.floor(Math.random() * config.numberOfVideos) + 1
		return `videos/${config.videoFilename}${randomVideo}.mp4`
	}

	playlistFinished(){
		if(this.state.changeSize !== 0){
			const changeSize = this.state.changeSize -1
			this.setState((state)=>({changeSize, source: this.shuffleVideos(), currentProject: this.props.projects[changeSize]}))
		} else {
			this.refs.video.pause()
			this.props.playlistFinished()
		}
	}

	render() {
		if(!this.props.isVisible){
			return null
		}
		return (<div>
				<video ref="video" src={this.state.source} onEnded={this.playlistFinished} width="100%">
				  	Your browser does not support the video tag.
				</video>
			</div>)
	}
}