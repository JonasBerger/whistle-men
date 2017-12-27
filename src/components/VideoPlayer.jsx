import React from 'react'
import {config} from '../config'
import MessageBanner from './MessageBanner'

export default class VideoPlayer extends React.Component {
	constructor(props){
		super(props)
		this.playlistFinished = this.playlistFinished.bind(this)
		this.state = {changeSize: 0,  currentProject: {commit: {sha:'', commit:{message: ''}, author: {login: ''}}}}
	}

	createPlaylistWithProject(){
		if(this.props.projects.length && this.props.isVisible){
			if(this.isPlaying()){
					this.refs.video.load()
			}
			const changeSize = this.props.projects.length -1
			this.setState({changeSize, source: this.shuffleVideos(), currentProject: this.props.projects[changeSize]})
			this.refs.video.play()
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
			return (<h1>{"Watching for changes!"}</h1>)
		}
		return (<div>
				<MessageBanner project={this.state.currentProject}/>
				<video ref="video" src={this.state.source} onEnded={this.playlistFinished} width="100%">
				  	Your browser does not support the video tag.
				</video>
			</div>)
	}
}