import React from 'react'
import {config} from '../config'

export default class VideoPlayer extends React.Component {
	constructor(props){
		super(props)
		this.state = {source: `videos/${config.videoFilename}1.mp4`}
	}

	componentDidMount(){
		this.shuffleVideos()
		this.refs.video.play()
	}

	shuffleVideos(){
		const randomVideo = Math.floor(Math.random() * config.numberOfVideos) + 1
		this.setState({source: `videos/${config.videoFilename}${randomVideo}.mp4`})
	}

	render() {
		if(!this.props.isVisible){
			return null
		}
		return <video ref="video" onEnded={this.props.videoFinished} width="100%">
				  <source src={this.state.source} type="video/mp4"/>
				  Your browser does not support the video tag.
			</video>
	}
}