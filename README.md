# Whistle-Men
![alt text](https://github.com/JonasBerger/whistle-men/blob/master/whistle-men.png?raw=true "Whistle-Men")
With Whistle-Men you can watch multiple Git-Hub projets for incoming commits & put videos to a folder to randomly play when commit arrives!

## Get Started

**1. Download or clone this project**
* run ``` git clone https://github.com/JonasBerger/whistle-men.git``` or
* download with: https://github.com/JonasBerger/whistle-men/archive/master.zip
* run yarn add //or npm install in project-folder

**2. Edit the src/config.js-file**
```javascript 
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
```
**3. Start running the project**
* yarn build //or npm build
* if you're going to build, you have to open the index.html via Browser

## Adding Custom Videos
1. Put your Videos in `public/videos`
2. Rename them to videoFilename (src/config.js) + next number(e.g. you got video1.mp4 next would be video2.mp4)
3. edit in src/config.js the `numberOfVideos` (in our example we would have video1 and video2)
4 rebuild project, or start project(if you already on a running Dev-Server all should be fine)
