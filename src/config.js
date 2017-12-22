/*https://api.github.com/repos/
JonasBerger/whistle-men/branches/
master?access_token=b79ff3ed15c4f468f02d845993fde65b3ae8bb11*/


export const config = {
	access_token: "", //create your access-token git->settings->developer-settings-> personal access-tokens
	baseurl: "https://api.github.com", //self-explaining
	owner: "JonasBerger", //owner or namespace
	videoFilename: "video", //name of the video-files eg. video{number}.mp4
	numberOfVideos: 1, //used for randomize#
	interval: 4, //interval in minutes to update
	projects: [ //list of Projects
		{name: "whistle-men", branch: "master"} //self-explaining
	]
}