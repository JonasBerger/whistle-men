export const config = {
	access_token: "", //create your access-token git->settings->developer-settings-> personal access-tokens
	baseurl: "https://api.github.com", //self-explaining
	owner: "JonasBerger", //owner or namespace
	videoFilename: "video", //name of the video-files eg. video{number}.mp4
	numberOfVideos: 6, //used for randomize#
	interval: 1, //interval in minutes to update
	projects: [ //list of Projects
		{name: "whistle-men", branch: "master"} //self-explaining
	]
}