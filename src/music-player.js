import birdsData from "./birds.js"
import {randomize} from "./random.js"

const playRandomBtn = document.getElementById("play-unknown");
const playCardBtn = document.getElementById("play-card");
const playIconUnknown = document.getElementById("unknown");
const playIconCard = document.getElementById("card");
const unknownBirdSong = document.getElementById("unknown-bird-song");
const birdCardSong = document.getElementById("bird-card-song");
const progressUnknown = document.getElementById("progress-unknown");
const progress = document.getElementById("progress");
const progressContainerUnknown = document.getElementById("progress-container-unknown");
const progressContainer = document.getElementById("progress-container");

let count = 0;

function loadRandomSong(){
	let random = randomize(6, 6)[0];
	let randomSong = birdsData[count][random].audio;
	unknownBirdSong.src = randomSong;
	let randomBirdInfo = [count, random];
	count++;
	if(count > 5){
		count = 0;
	}
	return randomBirdInfo;
}

function playSong(e){
	if(e.target.id === "play-unknown"){
		playRandomBtn.classList.add("play");
		playIconUnknown.classList.remove("fa-play");
		playIconUnknown.classList.add("fa-pause");

		unknownBirdSong.volume = 0.4;
		unknownBirdSong.play();
	}

	if(e.target.id === "play-card"){
		playCardBtn.classList.add("play");
		playIconCard.classList.remove("fa-play");
		playIconCard.classList.add("fa-pause");

		birdCardSong.volume = 0.4;
		birdCardSong.play();
	}
}

function pauseSong(e){
	switch(e){
		case 'card':
			playCardBtn.classList.remove("play");
			playIconCard.classList.remove("fa-pause");
			playIconCard.classList.add("fa-play");
	
			birdCardSong.pause();
			return;
		case 'unknown':
			playRandomBtn.classList.remove("play");
			playIconUnknown.classList.remove("fa-pause");
			playIconUnknown.classList.add("fa-play");
	
			unknownBirdSong.pause();
			return;
	}

	if(e.target.id === "play-unknown"){
		playRandomBtn.classList.remove("play");
		playIconUnknown.classList.remove("fa-pause");
		playIconUnknown.classList.add("fa-play");

		unknownBirdSong.pause();
	}

	if(e.target.id === "play-card"){
		playCardBtn.classList.remove("play");
		playIconCard.classList.remove("fa-pause");
		playIconCard.classList.add("fa-play");

		birdCardSong.pause();
	}
}

function updateProgress(e){
	let {duration, currentTime} = e.srcElement;
	let progressPrecent = (currentTime / duration) * 100;
	if(e.target.id === "unknown-bird-song"){
		progressUnknown.style.width = `${progressPrecent}%`;
	} else {
		progress.style.width = `${progressPrecent}%`;
	}
	if(duration === currentTime){
		pauseSong(e);
	}
}

function setProgress(e){
	let width = this.clientWidth;
	let offsetX = e.offsetX;
	if(e.target.id === "progress-container-unknown"){
		let duration = unknownBirdSong.duration;
		unknownBirdSong.currentTime = (offsetX / width) * duration;
	} else {
		let duration = birdCardSong.duration;
		birdCardSong.currentTime = (offsetX / width) * duration;
	}
}


const playButton = e => {
	const isPlaying = e.target.classList.contains("play");

	if(isPlaying){
		pauseSong(e);
	} else{
		playSong(e);
	}
}

playRandomBtn.addEventListener("click", playButton);
playCardBtn.addEventListener("click", playButton);

unknownBirdSong.addEventListener("timeupdate", updateProgress);
birdCardSong.addEventListener("timeupdate", updateProgress);

progressContainerUnknown.addEventListener("click", setProgress);
progressContainer.addEventListener("click", setProgress);

export {loadRandomSong, pauseSong}