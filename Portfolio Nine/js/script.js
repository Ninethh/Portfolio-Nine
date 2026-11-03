/*
let playBtn = document.querySelector(".play");
let video = document.querySelector("video");
let stopBtn = document.querySelector(".stop");

playBtn.addEventListener("click", function () {
  playVideo();
});

stopBtn.addEventListener("click", function () {
  stopVideo();
}); 
*/

/*
function playVideo() {
  video.play();
  console.log("play video");
}

function stopVideo() {
  video.pause();
  console.log("stop video");
}

var isPlaying = false;

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the spacebar
  if (event.code == "Space") {
    // if isPlaying is true, stop the video, otherwise play the video
  }
});
*/

const worksSwiper = new Swiper(".works-swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  speed: 650,
  loop: false,
  grabCursor: true,
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
  // Permet lliscar amb el dit en mòbil i trackpad/ratolí en ordinador.
  simulateTouch: true,
});

//apartat de iconos
const contactTiles = document.querySelectorAll(".contact-box");

contactTiles.forEach((tile) => {
  tile.addEventListener("mouseenter", () => {
    tile.classList.add("is-revealed");
  });
});

document.addEventListener("pointermove", (event) => {
  contactTiles.forEach((tile) => {
    if (!tile.classList.contains("is-revealed")) {
      return;
    }

    const bounds = tile.getBoundingClientRect();
    const isInside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;

    if (!isInside) {
      tile.classList.remove("is-revealed");
    }
  });
});

// Pausa els vídeos de youtube quan es canvia de diapositiva.
worksSwiper.on("slideChange", () => {
  document.querySelectorAll(".work-slide iframe").forEach((iframe) => {
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
      "*",
    );
  });
});
