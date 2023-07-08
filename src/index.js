import "./styles/style.scss"
import "./music-player.js"
import "./pages.js"
import guess from "./assets/guess.svg"
import creator from "./assets/creator.jpg"
import school from "./assets/rs-school-icon.svg"
import logo from "./assets/logo.svg"

const guessImg = document.getElementById("guess-bird-image");
guessImg.src = guess;

const creatorImg = document.getElementById("creator-image");
creatorImg.src = creator;

const schoolImg = document.getElementById("course-icon");
schoolImg.src = school;

const gameIcon = document.getElementById("game-logo");
gameIcon.src = logo;