import React from 'react'
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';

const MessageBanner = ({project, isVisible}) => {
	if(!isVisible || !project){
		return <AppBar showMenuIconButton={false} style={{background: '#333333'}}title={<div><CircularProgress style={{marginTop:'10px'}}/> Watching for changes!</div>} />
	}
	return (<AppBar showMenuIconButton={false} title={`${project.commit.author.login}: ${project.commit.commit.message}`}/>)
}

export default MessageBanner