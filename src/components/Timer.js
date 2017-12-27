import React from 'react'
import {buildFetchUrls} from '../helper/buildFetchUrls'
import {config} from '../config'

export default class Timer extends React.Component {

	constructor(props){
		super(props)
		this.state = {projects: [{commit: {sha: ''}}]}
	}

	componentDidMount(){
		const projectUrls = buildFetchUrls()
		setInterval(() => this.onUpdate(projectUrls), config.interval*10000)
	}

	onUpdate(projectUrls){
		Promise.all(projectUrls.map(url => fetch(url))).then(responses =>
	    Promise.all(responses.map(res => res.json())).then(res => {
	    	const changedProjects = this.getChanges(res)
	    	if(changedProjects.length){
	    		this.props.doUpdate(changedProjects)
	    		this.setState({projects: changedProjects})
	    	}
		}))
	}

	getChanges(projects){
		if(!projects.length){
			return
		}
		return projects.filter((project, index) =>{
			return project.commit.sha !== this.state.projects[index].commit.sha
		})
	}

	render(){
		return null
	}
}