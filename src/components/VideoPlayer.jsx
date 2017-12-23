import React from 'react'
import {config} from '../config'

export default class VideoPlayer extends React.Component {
	constructor(props){
		super(props)
		this.state = {source: `videos/${config.videoFilename}1.mp4`}
	}

	componentDidMount(){
		//this.shuffleVideos()
		//this.refs.video.play()
	}

	createPlaylistWithProject(){
		if(this.props.projects.length){
			const playlistWithInfo = this.props.projects.map(project => ({source: this.shuffleVideos(), project}))
			this.props.updateMessage(playlistWithInfo)
		}
	}

	videoFinished(){
		this.props.videoFinished()
	}


	shuffleVideos(){
		const randomVideo = Math.floor(Math.random() * config.numberOfVideos) + 1
		this.setState({source: `videos/${config.videoFilename}${randomVideo}.mp4`})
	}

	render() {
		if(!this.props.isVisible){
			return null
		}
		return <video ref="video" onEnded={this.videoFinished} width="100%">
				  <source src={this.state.source} type="video/mp4"/>
				  Your browser does not support the video tag.
			</video>
	}
}