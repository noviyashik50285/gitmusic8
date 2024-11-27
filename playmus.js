"use strict";
const musicTitleEl = document.getElementById("music_title");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "music/Celatoalcioccolato.mp3",
    displayName: "Celato al cioccolato",
  },
  {
    path: "music/LikeaPrayer.mp3",
    displayName: "Like A Prayer",
  },
  {
    path: "music/SorryimaLady.mp3",
    displayName: "Sorry, I'm a lady",
  },
  {
    path: "music/DancingQueen.mp3",
    displayName: "Dancing Queen",
  },
  {
    path: "music/HeadOverHeels.mp3",
    displayName: "Head Over Heels",
  },
  {
    path: "music/LovetoHateyou.mp3",
    displayName: "I Love To Hate You",
  },
  {
    path: "music/BeeGees.mp3",
    displayName: "Bee Gees",
  },
  {
    path: "music/Felicita.mp3",
    displayName: "Felicita",
  },
  {
    path: "music/DaddyCool.mp3",
    displayName: "Daddy Cool",
  },
  {
    path: "music/FelizNavidad.mp3",
    displayName: "Feliz Navidad",
  },
  {
    path: "music/MammaMia.mp3",
    displayName: "Mamma Mia",
  },
  {
    path: "music/TakeaChanceonme.mp3",
    displayName: "Take A Chance On Me",
  },
  {
    path: "music/IlTempoSeNeVa.mp3",
    displayName: "Il Tempo Se Ne Va",
  },
  {
    path: "music/BillyJean.mp3",
    displayName: "Billy Jean",
  },
  {
    path: "music/KalimbadeLuna.mp3",
    displayName: "Kalimba de Luna",
  },
  {
    path: "music/OneOfUs.mp3",
    displayName: "One Of Us",
  },
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);

