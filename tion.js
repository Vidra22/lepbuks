const soundButton = document.getElementById('soundButton');
const audio = document.getElementById('audio');

soundButton.addEventListener('click', function() {
    audio.play();
});
