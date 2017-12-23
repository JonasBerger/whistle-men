import {config} from '../config'

export const buildFetchUrls = () => {
	return config.projects.map(project => (
		`${config.baseurl}/repos/${config.owner}/${project.name}/branches/${project.branch}?access_token=${config.access_token}`
	))
}