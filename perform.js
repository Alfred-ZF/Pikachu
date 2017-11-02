cheet('p i k a c h u', function () {
  window.setTimeout(openMouth, 200);
  playPikachu();
});

function playPikachu() {
  var pikachu = document.getElementById('audio');
  pikachu.play();
}

function openMouth() {
  var mouth = document.getElementById('open');
  mouth.classList.add('active');
  window.setTimeout(function () {
    mouth.classList.remove('active');
  }, 1500);
}
playPikachu();