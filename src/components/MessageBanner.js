import React from 'react'

const MessageBanner = ({push}) => (
	<div>
		commit: {push.commit.author.login}
	</div>
)

export default MessageBanner