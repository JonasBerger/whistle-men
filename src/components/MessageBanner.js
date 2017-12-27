import React from 'react'

const MessageBanner = ({project}) => (
	<div>
		commit: {project.commit.author.login}: {project.commit.commit.message}
	</div>
)

export default MessageBanner