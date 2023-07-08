import birdsData from "./birds.js"
import { randomize } from "./random.js"
import { loadRandomSong } from "./music-player.js";
import win from "./assets/audio/win.mp3"
import error from "./assets/audio/error.mp3"
import guess from "./assets/guess.svg"

const answersList = document.querySelectorAll(".answers-item");
const birdClass = document.querySelectorAll(".bird-class-item");
const instructions = document.querySelectorAll(".instruction");
const birdCardImage = document.getElementById("bird-card-image");
const cardList = document.querySelectorAll(".card-list-item");
const birdDescription = document.getElementById("bird-description");
const cardAudio = document.getElementById("bird-card-song");
const guessBird = document.getElementById("guess-bird-image");
const birdUnknownName = document.getElementById("bird-unknown-name");
const nextLevelBtn = document.getElementById("next-level");
const scoreCount = document.getElementById("score");


const winAudio = new Audio(win);
const errorAudio = new Audio(error);
let count = 0;
let countTry = 5;
let score = 0;
let unknownBird = loadRandomSong();
let unknownBirdName = birdsData[unknownBird[0]][unknownBird[1]].name;
let random;

function randomAnswers(){
	random = randomize(6,6);
	count++;
	if(count > 2){
		unknownBird = loadRandomSong();
		unknownBirdName = birdsData[unknownBird[0]][unknownBird[1]].name;
	}
	for(let i = 0; i < answersList.length; i++){
		answersList[i].innerHTML = birdsData[unknownBird[0]][random[i]].name;
	}
	for(let i = 0; i < birdClass.length; i++){
		birdClass[i].style.background = "";
	}
	birdClass[unknownBird[0]].style.background = "#303030";
}

randomAnswers();

function selectCards(e){
	let index = Array.from(e.target.parentNode.children).indexOf(e.target);
	let birdCardIndex = random[index];
	let birdInfo = birdsData[unknownBird[0]][birdCardIndex];
	birdCardImage.src = birdInfo.image;
	cardList[0].innerHTML = birdInfo.name;
	cardList[1].innerHTML = birdInfo.species;
	birdDescription.innerHTML = birdInfo.description;
	cardAudio.src = birdInfo.audio;
}

function selectAnswer(e){
	if(e.target.innerHTML === unknownBirdName){
		errorAudio.pause();
		errorAudio.currentTime = 0;
		winAudio.play();
		e.target.style = "background-color: #32A673"
		score += countTry;
		guessBird.src = birdsData[unknownBird[0]][unknownBird[1]].image;
		birdUnknownName.innerHTML = unknownBirdName;
		scoreCount.innerHTML = score;
		countTry = 5;
		addNextLevel();
		removeEventListeners();
	} else {
		errorAudio.pause();
		errorAudio.currentTime = 0;
		errorAudio.play();
		e.target.style = "background-color: #D84237";
		countTry--;
	}
}

function nextLevelPage(){
	randomAnswers();
	birdUnknownName.innerHTML = "******";
	guessBird.src = guess;
}

function removeEventListeners(){
	for(let i = 0; i < answersList.length; i++){
		answersList[i].removeEventListener("click", selectAnswer);
	}
}

function addEvents(){
	for(let i = 0; i < answersList.length; i++){
		answersList[i].addEventListener("click", selectAnswer);
	}
	for(let i = 0; i < answersList.length; i++){
		answersList[i].addEventListener("click", selectCards);
	}
}

function addNextLevel(){
	nextLevelBtn.style.background = "#3AC086";
	nextLevelBtn.style.cursor = "pointer";

	nextLevelBtn.addEventListener("click", nextLevelPage);
}

addEvents();


