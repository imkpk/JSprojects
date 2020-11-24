const video = document.getElementById("video");
const play = document.getElementById("play");
const stoop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//play and pause video
function toggleVideoStatus() {
  // return true;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// /update play / pause Icon
function updatePlayIcon() {
  // return true;
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play fa - 2x'></i>";
  } else {
    play.innerHTML = "<i class='fa fa-pause fa - 2x'></i>";
  }
}

//Update Progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  // get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
  // console.log(secs);
}

//Set Vide time to progress
function setVideoProgress() {
  // return true;
  video.currentTime = (+progress.value * video.duration) / 100;
}

//stop videos
function stopVideo() {
  // return true;
  video.currentTime = 0;
  video.pause();
}

//event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stoop.addEventListener("click", stopVideo);

progress.addEventListener("click", setVideoProgress);
