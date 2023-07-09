import birdsData from "./birds.js"
import { randomize } from "./random.js"
import { loadRandomSong } from "./music-player.js";
import win from "./assets/audio/win.mp3"
import error from "./assets/audio/error.mp3"
import guess from "./assets/guess.svg"
import { pauseSong, playingGameAgain} from "./music-player.js"

const answersList = document.querySelectorAll(".answers-item");
const birdClass = document.querySelectorAll(".bird-class-item");
const birdCardImage = document.getElementById("bird-card-image");
const cardList = document.querySelectorAll(".card-list-item");
const birdDescription = document.getElementById("bird-description");
const cardAudio = document.getElementById("bird-card-song");
const guessBird = document.getElementById("guess-bird-image");
let birdUnknownName = document.getElementById("bird-unknown-name");
const nextLevelBtn = document.getElementById("next-level");
const scoreCount = document.getElementById("score");
const quizQuestion = document.querySelector('.unknown-bird-section')

const quizSolve = document.createElement('div');
quizSolve.className = 'quiz-solved';
quizSolve.innerHTML = `
	<div class="congratulation">
		<h3 class="congratulation-score"></h3>
	</div>
	<div class="try-again">
		<button id="try-again-game">
			↺ Try again
		</button>
	</div>
`

const winAudio = new Audio(win);
winAudio.volume = 0.25;
const errorAudio = new Audio(error);
errorAudio.volume = 0.5;
let count = 0;
let countTry = 5;
let score = 0;
let unknownBird = loadRandomSong();
let unknownBirdName = birdsData[unknownBird[0]][unknownBird[1]].name;
let random;

function randomAnswers(){
	random = randomize(6,6);
	if(count > 0){
		unknownBird = loadRandomSong();
		unknownBirdName = birdsData[unknownBird[0]][unknownBird[1]].name;
	}
	count++;
	for(let i = 0; i < answersList.length; i++){
		answersList[i].innerHTML = birdsData[unknownBird[0]][random[i]].name;
		answersList[i].style = "background-color: #303030";
	}
	for(let i = 0; i < birdClass.length; i++){
		birdClass[i].style.background = "";
	}
	birdClass[unknownBird[0]].style.background = "#303030";
	nextLevelBtn.removeEventListener("click", nextLevelPage);
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
	pauseSong('card');
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
		e.target.removeEventListener("click", selectAnswer);
	}
}

function nextLevelPage(){
	pauseSong('unknown');
	if(count === 6){
		quizSolved();
		return;
	}
	addEvents();
	randomAnswers();
	nextLevelBtn.style.background = "";
	nextLevelBtn.style.cursor = "";
	birdUnknownName.innerHTML = "******";
	guessBird.src = guess;
}

function quizSolved(){
	let quizSection = quizQuestion.innerHTML;
	let quiz = 'quiz';
	localStorage.setItem(quiz, quizSection);
	quizQuestion.innerHTML = '';
	quizQuestion.append(quizSolve);
	const congratulationScore = document.querySelector('.congratulation-score');
	congratulationScore.innerText = `
	Hooray, you solve game with ${score} Points.
	You score: ${score}/30
	`;
	removeSelectingCard();
	const tryAgain = document.getElementById("try-again-game");
	tryAgain.addEventListener('click', playGameAgain);
}

function removeEventListeners(){
	for(let i = 0; i < answersList.length; i++){
		answersList[i].removeEventListener("click", selectAnswer);
	}
}

function removeSelectingCard(){
	for(let i = 0; i < answersList.length; i++){
		answersList[i].removeEventListener("click", selectCards);
	}
}

function playGameAgain(){
	count = 0;
	score = 0;
	quizQuestion.innerHTML = '';
	quizQuestion.innerHTML = `${localStorage.getItem('quiz')}`
	nextLevelBtn.style.background = "";
	nextLevelBtn.style.cursor = "";
	birdUnknownName = document.getElementById("bird-unknown-name");
	birdUnknownName.innerHTML = "******";
	guessBird.src = guess;
	playingGameAgain();
	unknownBird = loadRandomSong();
	unknownBirdName = birdsData[unknownBird[0]][unknownBird[1]].name;
	randomAnswers();
	addEvents()
	localStorage.clear();
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
	console.log(count)
}

addEvents();

