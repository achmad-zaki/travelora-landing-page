document.getElementById('play_button').addEventListener('click', () => {
    const videoCover = document.getElementById('cover_video')
    const playButton = document.getElementById('play_button')

    videoCover.style.display = 'none'
    playButton.style.display = 'none'

    // Tampilkan video
    const videoPlayer = document.getElementById("video_player");
    videoPlayer.classList.remove("hidden");
    videoPlayer.classList.add("visible");

    // Putar video secara otomatis
    videoPlayer.muted = true;
    videoPlayer.play();
})